/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface HoneySlideshow {
    'baseURL': string;
    'slides': Array<string>;
  }
}

declare global {


  interface HTMLHoneySlideshowElement extends Components.HoneySlideshow, HTMLStencilElement {}
  var HTMLHoneySlideshowElement: {
    prototype: HTMLHoneySlideshowElement;
    new (): HTMLHoneySlideshowElement;
  };
  interface HTMLElementTagNameMap {
    'honey-slideshow': HTMLHoneySlideshowElement;
  }
}

declare namespace LocalJSX {
  interface HoneySlideshow {
    'baseURL'?: string;
    'slides'?: Array<string>;
  }

  interface IntrinsicElements {
    'honey-slideshow': HoneySlideshow;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'honey-slideshow': LocalJSX.HoneySlideshow & JSXBase.HTMLAttributes<HTMLHoneySlideshowElement>;
    }
  }
}


