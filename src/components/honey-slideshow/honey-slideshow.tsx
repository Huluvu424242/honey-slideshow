import {Component, Element, h, Host, Listen, Prop, State} from "@stencil/core";
import {
  IMG_END,
  IMG_FASTFOREWARD,
  IMG_FASTREWIND,
  IMG_FOREWARD,
  IMG_PAUSE, IMG_PLAY,
  IMG_REWIND,
  IMG_START,
  IMG_STOP
} from "./icon-constants";
import {Fileloader, ResponseInfo} from "../../shared/fileloader";
import marked from "marked";
import {IonicSafeString} from "@ionic/core";
import {Logger} from "../../shared/logger";
import {SpeakerOptions} from "@huluvu424242/honey-speaker/dist/types/components/honey-speaker/speaker-options";


@Component({
  tag: "honey-slideshow",
  styleUrl: "honey-slideshow.css",
  assetsDirs: ['assets'],
  shadow: true
})
export class HoneySlideshow {

  @Element() hostElement: HTMLElement;

  playButton: HTMLButtonElement;

  @Prop() baseurl: string;

  tags: Array<string>;
  slides: Array<string>;
  @State() slide: number;

  @State() isPlayingMode: boolean;
  @State() isPausierend: boolean;

  async componentWillLoad() {
    this.isPlayingMode = false;
    this.isPausierend = false;
    this.slide = 0;
    this.slides = [];
    this.tags = [];
    await this.loadMetadata();
    marked.setOptions({
      baseUrl: this.baseurl,
      headerIds: true,
      headerPrefix: "heading"
    });
  }

  async componentDidLoad(){
    const speakerOptions: SpeakerOptions = {
      disabledHostClass: "flex-content-disabled",
      enabledHostClass: "flex-content",
      disabledTitleText: "Zu dieser Folie existiert kein Audio",
      pressedTitleText: "Vortrag läuft gerade.",
      unpressedTitleText: "Vortrag starten",
      pressedAltText: "Symbol eines tönenden Lautsprechers",
      unpressedAltText: "Symbol eines stummen Lautsprechers"
    };
    await this.playButton['updateOptions'](speakerOptions);
  }


  getFileURLexternalForm(fileName: string): string {
    if (this.baseurl.endsWith("/")) {
      return this.baseurl + fileName;
    } else {
      return this.baseurl + "/" + fileName;
    }
  }

  getCurrentURLExternalForm(): string {
    const slideNr: number = this.slide;
    const slideFileName: string = this.slides[slideNr];
    return this.getFileURLexternalForm(slideFileName);
  }

  getCurrentSlideURLExternalForm(): string {
    return this.getCurrentURLExternalForm() + ".md";
  }

  getCurrentAudiofileURLExternalForm(): string {
    return this.getCurrentURLExternalForm() + ".txt";
  }

  printPageNum(): string {
    return "Folie\u00a0" + (this.slide + 1) + "/" + this.slides.length;
  }


  async loadData(fileName: string): Promise<string> {
    return await new Promise<string>(resolve =>
      Fileloader.of(fileName).loadFile().subscribe((indexInfo: ResponseInfo) => {
        resolve(indexInfo.content);
      }));
  }

  async loadMetadata() {
    const indexFile = this.getFileURLexternalForm("0index.txt");
    const indexFileContent: string = await this.loadData(indexFile);
    this.slides = indexFileContent.split(',').map(value => value.trim());
    await this.loadSlideContent();
    const tagsFile = this.getFileURLexternalForm("0tags.txt");
    const tagsFileContent: string = await this.loadData(tagsFile);
    this.tags = tagsFileContent.split(',').map(value => value.trim());
  }

  async loadSlideContent() {
    const slideFileName: string = this.getCurrentSlideURLExternalForm();
    const content = await this.loadData(slideFileName)
    Logger.infoMessage("MD Inhalt:\n" + content);
    const htmlContent = marked(content);
    const element = document.getElementById("slidewin");
    element.innerHTML = new IonicSafeString(htmlContent).value;
  }


  async loadSlide() {
    Logger.debugMessage("Lade Slide " + (this.slide + 1));
    await this.loadSlideContent();
  }

  isValidSlide(slideNr: number): boolean {
    return slideNr > -1 && slideNr < (this.slides.length);
  }

  async moveToSlide(slideNr: number) {
    if (this.isValidSlide(slideNr)) {
      this.slide = slideNr;
      await this.loadSlide();
    } else {
      alert("Invalid Slide -> no change");
    }
  }

  async handleStart(event: UIEvent) {
    event.target
    await this.playButton['cancelSpeaker']();
    await this.moveToSlide(0);
  }

  async handleFastRewind(event: UIEvent) {
    event.target;
    await this.playButton['cancelSpeaker']();
    await this.moveToSlide(this.slide - 10);
  }

  async handleRewind(event: UIEvent) {
    event.target;
    await this.playButton['cancelSpeaker']();
    await this.moveToSlide(this.slide - 1);
  }

  async handlePause(event: UIEvent) {
    event.target
    await this.playButton['pauseSpeaker']();
  }

  async handleResume(event: UIEvent) {
    event.target
    await this.playButton['resumeSpeaker']();
  }

  async handleStop(event: UIEvent) {
    event.target
    await this.playButton['cancelSpeaker']();
  }

  async handleForeward(event: UIEvent) {
    event.target;
    await this.playButton['cancelSpeaker']();
    await this.moveToSlide(this.slide + 1);
    // await this.playButton['toggleSpeaker']();
  }

  async handleFastForeward(event: Event) {
    event.target;
    await this.playButton['cancelSpeaker']();
    await this.moveToSlide(this.slide + 10);
  }

  async handleEnd(event: UIEvent) {
    event.target;
    await this.playButton['cancelSpeaker']();
    await this.moveToSlide(this.slides.length - 1);
  }

  @Listen('honeySpeakerStarted', {target: 'body', capture: true})
  onSpeakerStarted(event: CustomEvent<String>) {
    if (event.detail) {
      this.isPlayingMode = true;
      this.isPausierend = false;
    }
  }

  @Listen('honeySpeakerPaused', {target: 'body', capture: true})
  onSpeakerPaused(event: CustomEvent<String>) {
    if (event.detail) {
      this.isPlayingMode = true;
      this.isPausierend = true;
    }
  }

  @Listen('honeySpeakerResumed', {target: 'body', capture: true})
  onSpeakerResumed(event: CustomEvent<String>) {
    if (event.detail) {
      this.isPlayingMode = true;
      this.isPausierend = false;
    }
  }

  @Listen('honeySpeakerFinished', {target: 'body', capture: true})
  onSpeakerFinished(event: CustomEvent<String>) {
    if (event.detail) {
      this.isPlayingMode = false;
      this.isPausierend = false;
    }
  }

  @Listen('honeySpeakerFailed', {target: 'body', capture: true})
  onSpeakerFailed(event: CustomEvent<String>) {
    if (event.detail) {
      this.isPlayingMode = false;
      this.isPausierend = false;
    }
  }

  render() {
    return (
      <Host>
        <header>
          <slot name={"title"}>Platzhalter für den Titel der Präsentation</slot>
        </header>
        <hr class={"hr-oben"}/>
        <div id="slide-control" class="flex-container">
          <button onClick={(event: UIEvent) => this.handleStart(event)}
                  disabled={this.slide < 1}
                  id="startpos"
                  class="flex-content"
                  title="Zur ersten Folie"
                  innerHTML={IMG_START}/>
          <button onClick={(event: UIEvent) => this.handleFastRewind(event)}
                  disabled={(this.slide - 10) < 0}
                  id="fastrewind"
                  class="flex-content"
                  title={"10 Folien zurück"}
                  innerHTML={IMG_FASTREWIND}/>
          <button onClick={(event: UIEvent) => this.handleRewind(event)}
                  disabled={(this.slide - 1) < 0}
                  id="rewind"
                  class="flex-content"
                  title={"1 Folie zurück"}
                  innerHTML={IMG_REWIND}/>
          <honey-speaker id="playbutton"
                         texturl={this.getCurrentAudiofileURLExternalForm()}
                         ref={el => this.playButton = el}
                         pure/>
          <button onClick={this.isPausierend?this.handleResume.bind(this):this.handlePause.bind(this)}
                  disabled={!this.isPlayingMode}
                  id="pause"
                  class="flex-content"
                  title="Sprachausgabe pausieren"
                  innerHTML={this.isPausierend? IMG_PLAY : IMG_PAUSE}/>
          <button onClick={this.handleForeward.bind(this)}
                  disabled={(this.slide + 1) > (this.slides.length - 1)}
                  id="forward"
                  class="flex-content"
                  title={"1 Folie weiter"}
                  innerHTML={IMG_FOREWARD}/>
          <button onClick={this.handleFastForeward.bind(this)}
                  disabled={(this.slide + 10) > (this.slides.length - 1)}
                  id="fastforward"
                  class="flex-content"
                  title="10 Folien weiter"
                  innerHTML={IMG_FASTFOREWARD}/>
          <button onClick={this.handleEnd.bind(this)}
                  disabled={this.slide >= (this.slides.length - 1)}
                  id="endpos"
                  class="flex-content"
                  title="Zur letzten Folie"
                  innerHTML={IMG_END}/>
          <div id="pagenum"
               title={this.printPageNum()}>
            {this.printPageNum()}
          </div>
        </div>
        <hr class={"hr-unten"}/>
        <main>
          <div class="status">
          <span>Quellen: <a href={this.getCurrentSlideURLExternalForm()} target={"_blank"} class={"quelle"}>{"Folie"}</a>
            <a href={this.getCurrentAudiofileURLExternalForm()} target={"_blank"} class={"quelle"}>{"Audio"}</a>
          </span>
          <span class="space"/>
          <span id="taglist" class={"tag-container"}>
            Schlagwörter:
            {this.tags.map((tag) =>
              <span class={"tag-content"}>{tag}</span>
            )}
          </span>
          </div>
          <slot name={"slide-area"}/>
        </main>
      </Host>
    );
  }
}
