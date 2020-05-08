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
        <div id={"slide-control"} class={"flex-container"}>
          <div class="flex-content" innerHTML={IMG_START}/>
          <div class="flex-content" innerHTML={IMG_FASTREWIND}/>
          <div class="flex-content" innerHTML={IMG_REWIND}/>

          <div class="flex-content" innerHTML=
                  {this.isPlaying()
                    ? IMG_PAUSE
                    : IMG_PLAY
                  }>
          </div>

          <div class="flex-content" innerHTML={IMG_FOREWARD}/>
          <div class="flex-content" innerHTML={IMG_FASTFOREWARD}/>
          <div class="flex-content" innerHTML={IMG_END}/>
        </div>
        <div id={"slide-area"}/>
      </host>
    );
  }
}
