import {Component, h, Prop, State} from "@stencil/core";
import {
  IMG_END,
  IMG_FASTFOREWARD,
  IMG_FASTREWIND,
  IMG_FOREWARD,
  IMG_PAUSE,
  IMG_PLAY,
  IMG_REWIND,
  IMG_START
} from "./constants";
import {Sprachausgabe} from "./sprachausgabe";
import {Sprachauswahl} from "./sprachauswahl";
import {Logger} from "./logger";
import {FileLoader} from "./file-loader";
import marked from 'marked';

@Component({
  tag: "honey-slideshow",
  styleUrl: "honey-slideshow.css",
  assetsDirs: ['assets'],
  shadow: true
})
export class HoneySlideshow {

  @Prop() baseurl: string;
  @Prop() slides: Array<string>;
  @Prop() tags: Array<string>;

  @State() slide: number;
  @State() isPlaying: boolean;

  sprachauswahl: Sprachauswahl;

  sprachausgabe: Sprachausgabe;


  componentWillLoad() {
    this.sprachauswahl = new Sprachauswahl();
    this.sprachausgabe = new Sprachausgabe(this.sprachauswahl);
    this.slide = 0;
    this.isPlaying = false;
  }

  printPageNum(): string {
    return "Folie\u00a0" + (this.slide + 1) + "/" + this.slides.length;
  }

  playSlide() {
    alert("Play slide" + this.baseurl + "/" + this.slides[this.slide]);
  }

  loadSlide() {
    alert("Lade Slide " + (this.slide + 1));
    const url: URL = new URL("https://funthomas424242.github.io/foile-pile/test/unittest/slide1.md");
    const fileLoader: FileLoader = new FileLoader(url);
    fileLoader.getFileContent().subscribe(content => {
      Logger.infoMessage("MD Inhalt:\n" + content);
      const element = document.getElementById("slidewin");
      const htmlContent = marked(content);
      element.innerHTML = htmlContent;
    });
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
          <div onClick={(event: UIEvent) => this.handleStart(event)}
               class="flex-content"
               title={"Zur ersten Folie"}
               innerHTML={IMG_START}/>
          <div onClick={(event: UIEvent) => this.handleFastRewind(event)}
               class="flex-content"
               title={"10 Folien zurück"}
               innerHTML={IMG_FASTREWIND}/>
          <div onClick={(event: UIEvent) => this.handleRewind(event)}
               class="flex-content"
               title={"1 Folie zurück"}
               innerHTML={IMG_REWIND}/>
          {this.isPlaying
            ? <div
              class="flex-content"
              title="Sprachausgabe beenden"
              innerHTML={IMG_PAUSE}/>
            : <div onClick={(event: UIEvent) => this.handlePlay(event)}
                   class="flex-content"
                   title="Vortrag beginnen lassen"
                   innerHTML={IMG_PLAY}/>
          }
          <div onClick={(event: UIEvent) => this.handleForeward(event)}
               class="flex-content"
               title={"1 Folie weiter"}
               innerHTML={IMG_FOREWARD}/>
          <div onClick={(event: UIEvent) => this.handleFastForeward(event)}
               class="flex-content"
               title="10 Folien weiter"
               innerHTML={IMG_FASTFOREWARD}/>
          <div onClick={(event: UIEvent) => this.handleEnd(event)}
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
          <div>{this.baseurl}</div>
          <div>{this.slides}</div>
          <slot name={"slide-area"}/>
        </main>
      </host>
    );
  }
}
