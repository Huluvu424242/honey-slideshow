'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
const theme = require('./theme-43d6bd40.js');

const CardHeader = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * If `true`, the card header will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
    }
    render() {
        const mode = core.getIonMode(this);
        return (core.h(core.Host, { class: Object.assign(Object.assign({}, theme.createColorClasses(this.color)), { 'card-header-translucent': this.translucent, 'ion-inherit-color': true, [mode]: true }) }, core.h("slot", null)));
    }
    static get style() { return ":host {\n  --background: transparent;\n  --color: inherit;\n  display: block;\n  position: relative;\n  background: var(--background);\n  color: var(--color);\n}\n\n:host(.ion-color) {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast);\n}\n\n:host {\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 20px;\n  padding-bottom: 16px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 20px;\n    padding-inline-start: 20px;\n    -webkit-padding-end: 20px;\n    padding-inline-end: 20px;\n  }\n}\n\n\@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))) {\n  :host(.card-header-translucent) {\n    background-color: rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);\n    -webkit-backdrop-filter: saturate(180%) blur(30px);\n    backdrop-filter: saturate(180%) blur(30px);\n  }\n}"; }
};

exports.ion_card_header = CardHeader;
