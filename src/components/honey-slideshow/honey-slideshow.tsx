import {Component, h} from "@stencil/core";
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

@Component({
  tag: "honey-slideshow",
  styleUrl: "honey-slideshow.css",
  assetsDirs: ['assets'],
  shadow: true
})
export class HoneySlideshow {


  isPlaying() {
    return false;
  }

  render() {
    return (
      <host>
        <header>
          <slot name={"title"}>Platzhalter für den Titel der Präsentation</slot>
        </header>
        <nav>
          <div id={"slide-control"} class={"flex-container"}>
            <div class="flex-content" title={"Zur ersten Folie"} innerHTML={IMG_START}/>
            <div class="flex-content" title={"10 Folien zurück"} innerHTML={IMG_FASTREWIND}/>
            <div class="flex-content" title={"1 Folie zurück"} innerHTML={IMG_REWIND}/>

            <div class="flex-content"
                 title =
                   {this.isPlaying()
                     ? "Sprachausgabe beenden"
                     : "Vortrag beginnen lassen"
                   }
                 innerHTML=
                   {this.isPlaying()
                     ? IMG_PAUSE
                     : IMG_PLAY
                   }>
            </div>

            <div class="flex-content" title={"1 Folie weiter"} innerHTML={IMG_FOREWARD}/>
            <div class="flex-content" title={"10 Folien weiter"} innerHTML={IMG_FASTFOREWARD}/>
            <div class="flex-content" title={"Zur letzten Folie"} innerHTML={IMG_END}/>
            <div id="tags">
              <slot  name={"tags"}>Platzhalter für Tagliste</slot>
            </div>
          </div>
        </nav>
        <main>
          <slot name={"slide-area"}/>
        </main>
      </host>
    );
  }
}
