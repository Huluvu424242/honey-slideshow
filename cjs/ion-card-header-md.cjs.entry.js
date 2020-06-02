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
    static get style() { return ":host {\n  --background: transparent;\n  --color: inherit;\n  display: block;\n  position: relative;\n  background: var(--background);\n  color: var(--color);\n}\n\n:host(.ion-color) {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast);\n}\n\n:host {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 16px;\n    padding-inline-start: 16px;\n    -webkit-padding-end: 16px;\n    padding-inline-end: 16px;\n  }\n}\n\n::slotted(ion-card-title:not(:first-child)),\n::slotted(ion-card-subtitle:not(:first-child)) {\n  margin-top: 8px;\n}"; }
};

exports.ion_card_header = CardHeader;
