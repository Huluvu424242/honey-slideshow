import {Component, Element, h, Prop, State} from "@stencil/core";
import {
  IMG_END,
  IMG_FASTFOREWARD,
  IMG_FASTREWIND,
  IMG_FOREWARD,
  IMG_PAUSE,
  IMG_PLAY,
  IMG_REWIND,
  IMG_START,
  IMG_STOP
} from "./icon-constants";
import {Sprachausgabe, VorleserCallbacks} from "../../shared/sprachausgabe/sprachausgabe";
import {Sprachauswahl} from "../../shared/stimmenauswahl/stimmenauswahl";
import {Logger} from "../../shared/logging/logger";
import {Fileloader, ResponseInfo} from "../../shared/network/fileloader";
import marked from "marked";
import {IonicSafeString} from "@ionic/core";
import {Sprachsynthese} from "../../shared/sprachausgabe/sprachsynthese";


@Component({
  tag: "honey-slideshow",
  styleUrl: "honey-slideshow.css",
  assetsDirs: ['assets'],
  shadow: true
})
export class HoneySlideshow {

  // Host Element
  @Element() el: HTMLElement;

  @Prop() baseurl: string;

  @State() tags: Array<string>;
  @State() slides: Array<string>;
  @State() slide: number;

  @State() isPlayingMode: boolean;
  @State() isPausierend: boolean;

  sprachauswahl: Sprachauswahl;

  sprachausgabe: Sprachausgabe;


  getFileURLexternalForm(fileName: string): string {
    if (this.baseurl.endsWith("/")) {
      return this.baseurl + fileName;
    } else {
      return this.baseurl + "/" + fileName;
    }
  }

  getCurrentSlideURLExternalForm(): string {
    const slideNr: number = this.slide;
    const slideFileName: string = this.slides[slideNr];
    return this.getFileURLexternalForm(slideFileName);
  }

  getVorleserCallbacks(): VorleserCallbacks {
    const callbacks: VorleserCallbacks = {}
    callbacks.onstart = () => {
      this.isPlayingMode = true;
      this.isPausierend = false;
      Logger.debugMessage("onstart");
    }
    callbacks.onpause = () => {
      this.isPlayingMode = true;
      this.isPausierend = true;
      Logger.debugMessage("onpause");
    }
    callbacks.onresume = () => {
      this.isPlayingMode = true;
      this.isPausierend = false;
      Logger.debugMessage("onresume");
    }
    callbacks.onend = () => {
      this.isPlayingMode = false;
      this.isPausierend = false;
      Logger.debugMessage("onend");
    }

    return callbacks;
  }


// wird exakt einmal aufgerufen (wenn die Komponente das erste Mal in den DOM eingehängt wird)
  componentWillLoad() {
    const sprachsynthese: Sprachsynthese = new Sprachsynthese();
    this.sprachauswahl = new Sprachauswahl(sprachsynthese);
    this.sprachausgabe = new Sprachausgabe(sprachsynthese, this.sprachauswahl, this.getVorleserCallbacks());
    this.isPlayingMode = false;
    this.isPausierend = false;
    this.slide = 0;
    this.slides = [];
    this.tags = [];
    this.loadMetadata();
    marked.setOptions({
      baseUrl: this.baseurl,
      headerIds: true,
      headerPrefix: "heading"
    });
  }

  printPageNum(): string {
    return "Folie\u00a0" + (this.slide + 1) + "/" + this.slides.length;
  }

  playSlide() {
    Logger.debugMessage("Play slide" + this.baseurl + "/" + this.slides[this.slide]);
    this.loadAudioContent();
  }

  loadMetadata() {
    const indexFile = this.getFileURLexternalForm("0index.txt");
    Fileloader.of(indexFile).loadFile().subscribe((indexInfo: ResponseInfo) => {
      this.slides = indexInfo.content.split(',').map(value => value.trim());
      this.loadSlideContent();
    });
    const tagsFile = this.getFileURLexternalForm("0tags.txt");
    Fileloader.of(tagsFile).loadFile().subscribe((tagsInfo: ResponseInfo) => {
      this.tags = tagsInfo.content.split(',').map(value => value.trim());
    });
  }

  loadAudioContent() {
    this.sprachausgabe.cancelSpeakingAndClearQueue();
    const audioFileName: string = this.getCurrentSlideURLExternalForm() + ".txt";
    const audioURL: URL = new URL(audioFileName);
    Logger.infoMessage("audioURL: " + audioURL);
    const audioLoader: Fileloader = new Fileloader(audioURL);
    audioLoader.loadFile().subscribe((audioInfo: ResponseInfo) => {
      if( audioInfo.status === 200) {
        if( audioInfo.content.length < 2){
          this.sprachausgabe.textVorlesen("Diese Folie besitzt leider keine Audiounterstützung.");
        }else {
          this.sprachausgabe.textVorlesen(audioInfo.content);
        }
      }else{
        this.sprachausgabe.textVorlesen("Die Sprachdatei konnte nicht geladen werden.");
      }
    });
  }

  loadSlideContent() {
    const slideFileName: string = this.getCurrentSlideURLExternalForm() + ".md";
    const slideURL: URL = new URL(slideFileName);
    Logger.infoMessage("slideURL: " + slideURL);
    const slideLoader: Fileloader = new Fileloader(slideURL);
    slideLoader.loadFile().subscribe((responseInfo: ResponseInfo) => {
      Logger.infoMessage("MD Inhalt:\n" + responseInfo.content);
      const element = document.getElementById("slidewin");
      const htmlContent = marked(responseInfo.content);
      const sanifiedHtmlContent: string = new IonicSafeString(htmlContent).value;
      element.innerHTML = sanifiedHtmlContent;
    });
  }


  loadSlide() {
    Logger.debugMessage("Lade Slide " + (this.slide + 1));
    this.loadSlideContent();
    this.loadAudioContent();
  }

  isValidSlide(slideNr: number): boolean {
    return slideNr > -1 && slideNr < (this.slides.length);
  }

  moveToSlide(slideNr: number) {
    if (this.isValidSlide(slideNr)) {
      this.slide = slideNr;
      this.loadSlide();
    } else {
      alert("Invalid Slide -> no change");
    }
  }

  handleStart(event: UIEvent) {
    event.target
    this.moveToSlide(0);
  }

  handleFastRewind(event: UIEvent) {
    event.target
    this.moveToSlide(this.slide - 10);
  }

  handleRewind(event: UIEvent) {
    event.target
    this.moveToSlide(this.slide - 1);
  }

  handlePause(event: UIEvent) {
    event.target
    if (this.sprachausgabe.isPaused()) {
      this.sprachausgabe.resumeSpeakingFromQueue();
    } else {
      this.sprachausgabe.pauseSpeakingFromQueue();
    }
  }

  handleStop(event: UIEvent) {
    event.target
    this.sprachausgabe.cancelSpeakingAndClearQueue();
  }

  handlePlay(event: UIEvent) {
    event.target
    this.playSlide();
  }

  handleForeward(event: UIEvent) {
    event.target
    this.moveToSlide(this.slide + 1);
  }

  handleFastForeward(event: UIEvent) {
    event.target
    this.moveToSlide(this.slide + 10);
  }

  handleEnd(event: UIEvent) {
    event.target
    this.moveToSlide(this.slides.length - 1);
  }


  render() {
    return (
      <host>
        <header>
          <slot name={"title"}>Platzhalter für den Titel der Präsentation</slot>
          <div id="taglist" class={"tag-container"}>
            {this.tags.map((tag) =>
              <span class={"tag-content"}>{tag}</span>
            )}
          </div>
        </header>
        <hr class={"hr-oben"}/>
        <div id={"slide-control"} class={"flex-container"}>
          <button onClick={(event: UIEvent) => this.handleStart(event)}
                  disabled={this.slide < 1}
                  id="startpos"
                  class="flex-content"
                  title={"Zur ersten Folie"}
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
          <button
            onClick={(event: UIEvent) => this.isPlayingMode && this.isPausierend ? this.handlePause(event) : this.handlePlay(event)}
            disabled={this.isPlayingMode && !this.isPausierend}
            id="playbutton"
            class="flex-content"
            title={this.isPlayingMode && this.isPausierend ? "Sprachausgabe fortsetzen" : "Vortrag beginnen lassen"}
            innerHTML={IMG_PLAY}/>
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
          <div>Quellen: <a href={this.getCurrentSlideURLExternalForm()+".md"} target={"_blank"} class={"quelle"}>{"Folie"}</a>
            <a href={this.getCurrentSlideURLExternalForm()+".txt"} target={"_blank"} class={"quelle"}>{"Audio"}</a>
          </div>
          <slot name={"slide-area"}/>
        </main>
      </host>
    );
  }
}
