'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');

const Footer = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * If `true`, the footer will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         *
         * Note: In order to scroll content behind the footer, the `fullscreen`
         * attribute needs to be set on the content.
         */
        this.translucent = false;
    }
    render() {
        const mode = core.getIonMode(this);
        const translucent = this.translucent;
        return (core.h(core.Host, { role: "contentinfo", class: {
                [mode]: true,
                // Used internally for styling
                [`footer-${mode}`]: true,
                [`footer-translucent`]: translucent,
                [`footer-translucent-${mode}`]: translucent,
            } }, mode === 'ios' && translucent &&
            core.h("div", { class: "footer-background" }), core.h("slot", null)));
    }
    static get style() { return "ion-footer {\n  display: block;\n  position: relative;\n  -ms-flex-order: 1;\n  order: 1;\n  width: 100%;\n  z-index: 10;\n}\n\nion-footer ion-toolbar:last-of-type {\n  padding-bottom: var(--ion-safe-area-bottom, 0);\n}\n\n.footer-md::before {\n  left: 0;\n  top: -2px;\n  bottom: auto;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==\");\n  background-repeat: repeat-x;\n  content: \"\";\n}\n[dir=rtl] .footer-md::before, :host-context([dir=rtl]) .footer-md::before {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\n[dir=rtl] .footer-md::before, :host-context([dir=rtl]) .footer-md::before {\n  background-position: right 0 top 0;\n}\n\n.footer-md.ion-no-border::before {\n  display: none;\n}"; }
};

exports.ion_footer = Footer;
