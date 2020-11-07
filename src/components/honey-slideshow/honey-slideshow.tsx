import {Component, Element, h, Host, Prop, State} from "@stencil/core";
import {
  IMG_END,
  IMG_FASTFOREWARD,
  IMG_FASTREWIND,
  IMG_FOREWARD,
  IMG_PAUSE,
  IMG_REWIND,
  IMG_START,
  IMG_STOP
} from "./icon-constants";
import {Fileloader, ResponseInfo} from "../../shared/fileloader";
import marked from "marked";
import {IonicSafeString} from "@ionic/core";
import {Logger} from "../../shared/logger";


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

  handleStart(event: UIEvent) {
    event.target
    this.moveToSlide(0);
  }

  handleFastRewind(event: UIEvent) {
    event.target;
    this.moveToSlide(this.slide - 10);
  }

  handleRewind(event: UIEvent) {
    event.target;
    this.moveToSlide(this.slide - 1);
  }

  handlePause(event: UIEvent) {
    event.target
  }

  handleStop(event: UIEvent) {
    event.target
  }

  handleForeward(event: UIEvent) {
    event.target;
    this.moveToSlide(this.slide + 1);
  }

  handleFastForeward(event: UIEvent) {
    event.target;
    this.moveToSlide(this.slide + 10);
  }

  handleEnd(event: UIEvent) {
    event.target;
    this.moveToSlide(this.slides.length - 1);
  }


  render() {
    return (
      <Host>
        <header>
          <slot name={"title"}>Platzhalter für den Titel der Präsentation</slot>
          <div id="taglist" class={"tag-container"}>
            {this.tags.map((tag) =>
              <span class={"tag-content"}>{tag}</span>
            )}
          </div>
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
                         ref={this.playButton}
                         class="flex-content" pure verbose/>
          {/*<button*/}
          {/*  onClick={(event: UIEvent) => this.isPlayingMode && this.isPausierend ? this.handlePause(event) : this.handlePlay(event)}*/}
          {/*  disabled={this.isPlayingMode && !this.isPausierend}*/}
          {/*  class="flex-content"*/}
          {/*  title={this.isPlayingMode && this.isPausierend ? "Sprachausgabe fortsetzen" : "Vortrag beginnen lassen"}*/}
          {/*  innerHTML={IMG_PLAY}/>*/}
          <button onClick={(event: UIEvent) => this.handlePause(event)}
                  disabled={!this.isPlayingMode || this.isPausierend}
                  id="pause"
                  class="flex-content"
                  title="Sprachausgabe pausieren"
                  innerHTML={IMG_PAUSE}/>
          <button onClick={(event: UIEvent) => this.handleStop(event)}
                  disabled={!this.isPlayingMode}
                  id="stop"
                  class="flex-content"
                  title="Sprachausgabe beenden"
                  innerHTML={IMG_STOP}/>
          <button onClick={(event: UIEvent) => this.handleForeward(event)}
                  disabled={(this.slide + 1) > (this.slides.length - 1)}
                  id="forward"
                  class="flex-content"
                  title={"1 Folie weiter"}
                  innerHTML={IMG_FOREWARD}/>
          <button onClick={(event: UIEvent) => this.handleFastForeward(event)}
                  disabled={(this.slide + 10) > (this.slides.length - 1)}
                  id="fastforward"
                  class="flex-content"
                  title="10 Folien weiter"
                  innerHTML={IMG_FASTFOREWARD}/>
          <button onClick={(event: UIEvent) => this.handleEnd(event)}
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
          <div>Quellen: <a href={this.getCurrentSlideURLExternalForm()} target={"_blank"} class={"quelle"}>{"Folie"}</a>
            <a href={this.getCurrentAudiofileURLExternalForm()} target={"_blank"} class={"quelle"}>{"Audio"}</a>
          </div>
          <slot name={"slide-area"}/>
        </main>
      </Host>
    );
  }
}
