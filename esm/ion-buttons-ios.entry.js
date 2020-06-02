import { r as registerInstance, c as getIonMode, h, H as Host } from './core-df18ef15.js';

const Buttons = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If true, buttons will disappear when its
         * parent toolbar has fully collapsed if the toolbar
         * is not the first toolbar. If the toolbar is the
         * first toolbar, the buttons will be hidden and will
         * only be shown once all toolbars have fully collapsed.
         *
         * Only applies in `ios` mode with `collapse` set to
         * `true` on `ion-header`.
         *
         * Typically used for [Collapsible Large Titles](https://ionicframework.com/docs/api/title#collapsible-large-titles)
         */
        this.collapse = false;
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { class: {
                [mode]: true,
                ['buttons-collapse']: this.collapse
            } }));
    }
    static get style() { return ".sc-ion-buttons-ios-h {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  z-index: 99;\n}\n\n.sc-ion-buttons-ios-s  ion-button  {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.sc-ion-buttons-ios-s  ion-button  {\n  --padding-start: 5px;\n  --padding-end: 5px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 32px;\n  font-size: 17px;\n  font-weight: 400;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .sc-ion-buttons-ios-s  ion-button  {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 2px;\n    margin-inline-start: 2px;\n    -webkit-margin-end: 2px;\n    margin-inline-end: 2px;\n  }\n}\n\n.sc-ion-buttons-ios-s  ion-button:not(.button-round)  {\n  --border-radius: 4px;\n}\n\n.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button  {\n  --color: initial;\n  --border-color: initial;\n  --background-focused: var(--ion-color-contrast);\n}\n\n.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-solid , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-solid  {\n  --background: var(--ion-color-contrast);\n  --background-focused: #000;\n  --background-focused-opacity: .12;\n  --background-activated: #000;\n  --background-activated-opacity: .12;\n  --background-hover: var(--ion-color-base);\n  --background-hover-opacity: 0.45;\n  --color: var(--ion-color-base);\n  --color-focused: var(--ion-color-base);\n}\n\n.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-clear , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-clear  {\n  --color-activated: var(--ion-color-contrast);\n  --color-focused: var(--ion-color-contrast);\n}\n\n.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-outline , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-outline  {\n  --color-activated: var(--ion-color-base);\n  --color-focused: var(--ion-color-contrast);\n}\n\n.sc-ion-buttons-ios-s  .button-clear , .sc-ion-buttons-ios-s  .button-outline  {\n  --background-activated: transparent;\n  --background-focused: currentColor;\n  --background-hover: transparent;\n}\n\n.sc-ion-buttons-ios-s  .button-solid:not(.ion-color)  {\n  --background-focused: #000;\n  --background-focused-opacity: .12;\n  --background-activated: #000;\n  --background-activated-opacity: .12;\n}\n\n.sc-ion-buttons-ios-s  ion-icon[slot=start]  {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-right: 0.3em;\n  font-size: 24px;\n  line-height: 0.67;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .sc-ion-buttons-ios-s  ion-icon[slot=start]  {\n    margin-right: unset;\n    -webkit-margin-end: 0.3em;\n    margin-inline-end: 0.3em;\n  }\n}\n\n.sc-ion-buttons-ios-s  ion-icon[slot=end]  {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 0.4em;\n  font-size: 24px;\n  line-height: 0.67;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .sc-ion-buttons-ios-s  ion-icon[slot=end]  {\n    margin-left: unset;\n    -webkit-margin-start: 0.4em;\n    margin-inline-start: 0.4em;\n  }\n}\n\n.sc-ion-buttons-ios-s  ion-icon[slot=icon-only]  {\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 28px;\n  line-height: 0.67;\n}"; }
};

export { Buttons as ion_buttons };
