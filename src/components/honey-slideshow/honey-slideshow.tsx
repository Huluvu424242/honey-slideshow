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
  styleUrl: "honey-slideshow-design.css",
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
        <header id={"slide-control"} class={"header"}>
          <div innerHTML={IMG_START}/>
          <div innerHTML={IMG_FASTREWIND}/>
          <div innerHTML={IMG_REWIND}/>

          <span innerHTML=
                  {this.isPlaying()
                    ? IMG_PAUSE
                    : IMG_PLAY
                  }>
          </span>

          <span innerHTML={IMG_FOREWARD}/>
          <span innerHTML={IMG_FASTFOREWARD}/>
          <span innerHTML={IMG_END}/>
        </header>
        <div id={"slide-area"}/>
      </host>
    );
  }
}
