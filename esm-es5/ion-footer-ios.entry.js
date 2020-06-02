import { r as registerInstance, e as getIonMode, h, H as Host } from './core-890aed19.js';
var Footer = /** @class */ (function () {
    function Footer(hostRef) {
        registerInstance(this, hostRef);
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
    Footer.prototype.render = function () {
        var _a;
        var mode = getIonMode(this);
        var translucent = this.translucent;
        return (h(Host, { role: "contentinfo", class: (_a = {},
                _a[mode] = true,
                // Used internally for styling
                _a["footer-" + mode] = true,
                _a["footer-translucent"] = translucent,
                _a["footer-translucent-" + mode] = translucent,
                _a) }, mode === 'ios' && translucent &&
            h("div", { class: "footer-background" }), h("slot", null)));
    };
    Object.defineProperty(Footer, "style", {
        get: function () { return "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-ios ion-toolbar:first-of-type{--border-width:0.55px 0 0}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.footer-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8}}.footer-ios.ion-no-border ion-toolbar:first-of-type{--border-width:0}"; },
        enumerable: true,
        configurable: true
    });
    return Footer;
}());
export { Footer as ion_footer };
