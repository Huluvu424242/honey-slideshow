'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
require('./hardware-back-button-886c770d.js');
const overlays = require('./overlays-21fbeaca.js');
const theme = require('./theme-43d6bd40.js');
require('./helpers-31e8d80a.js');
const animation = require('./animation-8a037437.js');
const index$3 = require('./index-2504963a.js');

/**
 * iOS Loading Enter Animation
 */
const iosEnterAnimation = (baseEl) => {
    const baseAnimation = animation.createAnimation();
    const backdropAnimation = animation.createAnimation();
    const wrapperAnimation = animation.createAnimation();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
        .beforeStyles({
        'pointer-events': 'none'
    })
        .afterClearStyles(['pointer-events']);
    wrapperAnimation
        .addElement(baseEl.querySelector('.loading-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.01, transform: 'scale(1.1)' },
        { offset: 1, opacity: 1, transform: 'scale(1)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * iOS Loading Leave Animation
 */
const iosLeaveAnimation = (baseEl) => {
    const baseAnimation = animation.createAnimation();
    const backdropAnimation = animation.createAnimation();
    const wrapperAnimation = animation.createAnimation();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 'var(--backdrop-opacity)', 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.loading-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.99, transform: 'scale(1)' },
        { offset: 1, opacity: 0, transform: 'scale(0.9)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Md Loading Enter Animation
 */
const mdEnterAnimation = (baseEl) => {
    const baseAnimation = animation.createAnimation();
    const backdropAnimation = animation.createAnimation();
    const wrapperAnimation = animation.createAnimation();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
        .beforeStyles({
        'pointer-events': 'none'
    })
        .afterClearStyles(['pointer-events']);
    wrapperAnimation
        .addElement(baseEl.querySelector('.loading-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.01, transform: 'scale(1.1)' },
        { offset: 1, opacity: 1, transform: 'scale(1)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Md Loading Leave Animation
 */
const mdLeaveAnimation = (baseEl) => {
    const baseAnimation = animation.createAnimation();
    const backdropAnimation = animation.createAnimation();
    const wrapperAnimation = animation.createAnimation();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 'var(--backdrop-opacity)', 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.loading-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.99, transform: 'scale(1)' },
        { offset: 1, opacity: 0, transform: 'scale(0.9)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

const Loading = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.presented = false;
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * Number of milliseconds to wait before dismissing the loading indicator.
         */
        this.duration = 0;
        /**
         * If `true`, the loading indicator will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = false;
        /**
         * If `true`, a backdrop will be displayed behind the loading indicator.
         */
        this.showBackdrop = true;
        /**
         * If `true`, the loading indicator will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * If `true`, the loading indicator will animate.
         */
        this.animated = true;
        this.onBackdropTap = () => {
            this.dismiss(undefined, overlays.BACKDROP);
        };
        overlays.prepareOverlay(this.el);
        this.didPresent = core.createEvent(this, "ionLoadingDidPresent", 7);
        this.willPresent = core.createEvent(this, "ionLoadingWillPresent", 7);
        this.willDismiss = core.createEvent(this, "ionLoadingWillDismiss", 7);
        this.didDismiss = core.createEvent(this, "ionLoadingDidDismiss", 7);
    }
    componentWillLoad() {
        if (this.spinner === undefined) {
            const mode = core.getIonMode(this);
            this.spinner = core.config.get('loadingSpinner', core.config.get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
        }
    }
    /**
     * Present the loading overlay after it has been created.
     */
    async present() {
        await overlays.present(this, 'loadingEnter', iosEnterAnimation, mdEnterAnimation, undefined);
        if (this.duration > 0) {
            this.durationTimeout = setTimeout(() => this.dismiss(), this.duration + 10);
        }
    }
    /**
     * Dismiss the loading overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the loading.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the loading.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */
    dismiss(data, role) {
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        return overlays.dismiss(this, data, role, 'loadingLeave', iosLeaveAnimation, mdLeaveAnimation);
    }
    /**
     * Returns a promise that resolves when the loading did dismiss.
     */
    onDidDismiss() {
        return overlays.eventMethod(this.el, 'ionLoadingDidDismiss');
    }
    /**
     * Returns a promise that resolves when the loading will dismiss.
     */
    onWillDismiss() {
        return overlays.eventMethod(this.el, 'ionLoadingWillDismiss');
    }
    render() {
        const { message, spinner } = this;
        const mode = core.getIonMode(this);
        return (core.h(core.Host, { onIonBackdropTap: this.onBackdropTap, tabindex: "-1", style: {
                zIndex: `${40000 + this.overlayIndex}`
            }, class: Object.assign(Object.assign({}, theme.getClassMap(this.cssClass)), { [mode]: true, 'loading-translucent': this.translucent }) }, core.h("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }), core.h("div", { class: "loading-wrapper", role: "dialog" }, spinner && (core.h("div", { class: "loading-spinner" }, core.h("ion-spinner", { name: spinner, "aria-hidden": "true" }))), message && core.h("div", { class: "loading-content", innerHTML: index$3.sanitizeDOMString(message) }))));
    }
    get el() { return core.getElement(this); }
    static get style() { return ".sc-ion-loading-md-h {\n  \n  --min-width: auto;\n  --width: auto;\n  --min-height: auto;\n  --height: auto;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  outline: none;\n  font-family: var(--ion-font-family, inherit);\n  contain: strict;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 1001;\n}\n\n.overlay-hidden.sc-ion-loading-md-h {\n  display: none;\n}\n\n.loading-wrapper.sc-ion-loading-md {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-pack: inherit;\n  justify-content: inherit;\n  width: var(--width);\n  min-width: var(--min-width);\n  max-width: var(--max-width);\n  height: var(--height);\n  min-height: var(--min-height);\n  max-height: var(--max-height);\n  background: var(--background);\n  opacity: 0;\n  z-index: 10;\n}\n\n.spinner-lines.sc-ion-loading-md, .spinner-lines-small.sc-ion-loading-md, .spinner-bubbles.sc-ion-loading-md, .spinner-circles.sc-ion-loading-md, .spinner-crescent.sc-ion-loading-md, .spinner-dots.sc-ion-loading-md {\n  color: var(--spinner-color);\n}\n\n.sc-ion-loading-md-h {\n  --background: var(--ion-color-step-50, #f2f2f2);\n  --max-width: 280px;\n  --max-height: 90%;\n  --spinner-color: var(--ion-color-primary, #3880ff);\n  --backdrop-opacity: var(--ion-backdrop-opacity, 0.32);\n  color: var(--ion-color-step-850, #262626);\n  font-size: 14px;\n}\n\n.loading-wrapper.sc-ion-loading-md {\n  border-radius: 2px;\n  padding-left: 24px;\n  padding-right: 24px;\n  padding-top: 24px;\n  padding-bottom: 24px;\n  -webkit-box-shadow: 0 16px 20px rgba(0, 0, 0, 0.4);\n  box-shadow: 0 16px 20px rgba(0, 0, 0, 0.4);\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .loading-wrapper.sc-ion-loading-md {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 24px;\n    padding-inline-start: 24px;\n    -webkit-padding-end: 24px;\n    padding-inline-end: 24px;\n  }\n}\n\n.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md {\n  margin-left: 16px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md {\n    margin-left: unset;\n    -webkit-margin-start: 16px;\n    margin-inline-start: 16px;\n  }\n}"; }
};

exports.ion_loading = Loading;
