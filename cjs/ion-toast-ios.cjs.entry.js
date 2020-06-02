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
 * iOS Toast Enter Animation
 */
const iosEnterAnimation = (baseEl, position) => {
    const baseAnimation = animation.createAnimation();
    const wrapperAnimation = animation.createAnimation();
    const hostEl = baseEl.host || baseEl;
    const wrapperEl = baseEl.querySelector('.toast-wrapper');
    const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
    const top = `calc(10px + var(--ion-safe-area-top, 0px))`;
    wrapperAnimation.addElement(wrapperEl);
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('transform', 'translateY(-100%)', `translateY(${top})`);
            break;
        case 'middle':
            const topPosition = Math.floor(hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
            wrapperEl.style.top = `${topPosition}px`;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        default:
            wrapperAnimation.fromTo('transform', 'translateY(100%)', `translateY(${bottom})`);
            break;
    }
    return baseAnimation
        .addElement(hostEl)
        .easing('cubic-bezier(.155,1.105,.295,1.12)')
        .duration(400)
        .addAnimation(wrapperAnimation);
};

/**
 * iOS Toast Leave Animation
 */
const iosLeaveAnimation = (baseEl, position) => {
    const baseAnimation = animation.createAnimation();
    const wrapperAnimation = animation.createAnimation();
    const hostEl = baseEl.host || baseEl;
    const wrapperEl = baseEl.querySelector('.toast-wrapper');
    const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
    const top = `calc(10px + var(--ion-safe-area-top, 0px))`;
    wrapperAnimation.addElement(wrapperEl);
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('transform', `translateY(${top})`, 'translateY(-100%)');
            break;
        case 'middle':
            wrapperAnimation.fromTo('opacity', 0.99, 0);
            break;
        default:
            wrapperAnimation.fromTo('transform', `translateY(${bottom})`, 'translateY(100%)');
            break;
    }
    return baseAnimation
        .addElement(hostEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(300)
        .addAnimation(wrapperAnimation);
};

/**
 * MD Toast Enter Animation
 */
const mdEnterAnimation = (baseEl, position) => {
    const baseAnimation = animation.createAnimation();
    const wrapperAnimation = animation.createAnimation();
    const hostEl = baseEl.host || baseEl;
    const wrapperEl = baseEl.querySelector('.toast-wrapper');
    const bottom = `calc(8px + var(--ion-safe-area-bottom, 0px))`;
    const top = `calc(8px + var(--ion-safe-area-top, 0px))`;
    wrapperAnimation.addElement(wrapperEl);
    switch (position) {
        case 'top':
            wrapperEl.style.top = top;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        case 'middle':
            const topPosition = Math.floor(hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
            wrapperEl.style.top = `${topPosition}px`;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        default:
            wrapperEl.style.bottom = bottom;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
    }
    return baseAnimation
        .addElement(hostEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .addAnimation(wrapperAnimation);
};

/**
 * md Toast Leave Animation
 */
const mdLeaveAnimation = (baseEl) => {
    const baseAnimation = animation.createAnimation();
    const wrapperAnimation = animation.createAnimation();
    const hostEl = baseEl.host || baseEl;
    const wrapperEl = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation
        .addElement(wrapperEl)
        .fromTo('opacity', 0.99, 0);
    return baseAnimation
        .addElement(hostEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(300)
        .addAnimation(wrapperAnimation);
};

const Toast = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.presented = false;
        /**
         * How many milliseconds to wait before hiding the toast. By default, it will show
         * until `dismiss()` is called.
         */
        this.duration = 0;
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = false;
        /**
         * The position of the toast on the screen.
         */
        this.position = 'bottom';
        /**
         * If `true`, the toast will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * If `true`, the toast will animate.
         */
        this.animated = true;
        this.dispatchCancelHandler = (ev) => {
            const role = ev.detail.role;
            if (overlays.isCancel(role)) {
                const cancelButton = this.getButtons().find(b => b.role === 'cancel');
                this.callButtonHandler(cancelButton);
            }
        };
        overlays.prepareOverlay(this.el);
        this.didPresent = core.createEvent(this, "ionToastDidPresent", 7);
        this.willPresent = core.createEvent(this, "ionToastWillPresent", 7);
        this.willDismiss = core.createEvent(this, "ionToastWillDismiss", 7);
        this.didDismiss = core.createEvent(this, "ionToastDidDismiss", 7);
    }
    /**
     * Present the toast overlay after it has been created.
     */
    async present() {
        await overlays.present(this, 'toastEnter', iosEnterAnimation, mdEnterAnimation, this.position);
        if (this.duration > 0) {
            this.durationTimeout = setTimeout(() => this.dismiss(undefined, 'timeout'), this.duration);
        }
    }
    /**
     * Dismiss the toast overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the toast.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the toast.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */
    dismiss(data, role) {
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        return overlays.dismiss(this, data, role, 'toastLeave', iosLeaveAnimation, mdLeaveAnimation, this.position);
    }
    /**
     * Returns a promise that resolves when the toast did dismiss.
     */
    onDidDismiss() {
        return overlays.eventMethod(this.el, 'ionToastDidDismiss');
    }
    /**
     * Returns a promise that resolves when the toast will dismiss.
     */
    onWillDismiss() {
        return overlays.eventMethod(this.el, 'ionToastWillDismiss');
    }
    getButtons() {
        const buttons = this.buttons
            ? this.buttons.map(b => {
                return (typeof b === 'string')
                    ? { text: b }
                    : b;
            })
            : [];
        return buttons;
    }
    async buttonClick(button) {
        const role = button.role;
        if (overlays.isCancel(role)) {
            return this.dismiss(undefined, role);
        }
        const shouldDismiss = await this.callButtonHandler(button);
        if (shouldDismiss) {
            return this.dismiss(undefined, role);
        }
        return Promise.resolve();
    }
    async callButtonHandler(button) {
        if (button && button.handler) {
            // a handler has been provided, execute it
            // pass the handler the values from the inputs
            try {
                const rtn = await overlays.safeCall(button.handler);
                if (rtn === false) {
                    // if the return value of the handler is false then do not dismiss
                    return false;
                }
            }
            catch (e) {
                console.error(e);
            }
        }
        return true;
    }
    renderButtons(buttons, side) {
        if (buttons.length === 0) {
            return;
        }
        const mode = core.getIonMode(this);
        const buttonGroupsClasses = {
            'toast-button-group': true,
            [`toast-button-group-${side}`]: true
        };
        return (core.h("div", { class: buttonGroupsClasses }, buttons.map(b => core.h("button", { type: "button", class: buttonClass(b), tabIndex: 0, onClick: () => this.buttonClick(b), part: "button" }, core.h("div", { class: "toast-button-inner" }, b.icon &&
            core.h("ion-icon", { icon: b.icon, slot: b.text === undefined ? 'icon-only' : undefined, class: "toast-icon" }), b.text), mode === 'md' && core.h("ion-ripple-effect", { type: b.icon !== undefined && b.text === undefined ? 'unbounded' : 'bounded' })))));
    }
    render() {
        const allButtons = this.getButtons();
        const startButtons = allButtons.filter(b => b.side === 'start');
        const endButtons = allButtons.filter(b => b.side !== 'start');
        const mode = core.getIonMode(this);
        const wrapperClass = {
            'toast-wrapper': true,
            [`toast-${this.position}`]: true
        };
        return (core.h(core.Host, { style: {
                zIndex: `${60000 + this.overlayIndex}`,
            }, class: Object.assign(Object.assign(Object.assign({ [mode]: true }, theme.createColorClasses(this.color)), theme.getClassMap(this.cssClass)), { 'toast-translucent': this.translucent }), tabindex: "-1", onIonToastWillDismiss: this.dispatchCancelHandler }, core.h("div", { class: wrapperClass }, core.h("div", { class: "toast-container", part: "container" }, this.renderButtons(startButtons, 'start'), core.h("div", { class: "toast-content" }, this.header !== undefined &&
            core.h("div", { class: "toast-header", part: "header" }, this.header), this.message !== undefined &&
            core.h("div", { class: "toast-message", part: "message", innerHTML: index$3.sanitizeDOMString(this.message) })), this.renderButtons(endButtons, 'end')))));
    }
    get el() { return core.getElement(this); }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the toast\n   * \@prop --color: Color of the toast text\n   *\n   * \@prop --border-color: Border color of the toast\n   * \@prop --border-radius: Border radius of the toast\n   * \@prop --border-width: Border width of the toast\n   * \@prop --border-style: Border style of the toast\n   *\n   * \@prop --white-space: White space of the toast message\n   *\n   * \@prop --box-shadow: Box shadow of the toast\n   *\n   * \@prop --min-width: Minimum width of the toast\n   * \@prop --width: Width of the toast\n   * \@prop --max-width: Maximum width of the toast\n   *\n   * \@prop --min-height: Minimum height of the toast\n   * \@prop --height: Height of the toast\n   * \@prop --max-height: Maximum height of the toast\n   *\n   * \@prop --button-color: Color of the button text\n   *\n   * \@prop --start: Position from the left if direction is left-to-right, and from the right if direction is right-to-left\n   * \@prop --end: Position from the right if direction is left-to-right, and from the left if direction is right-to-left\n   */\n  --border-width: 0;\n  --border-style: none;\n  --border-color: initial;\n  --box-shadow: none;\n  --min-width: auto;\n  --width: auto;\n  --min-height: auto;\n  --height: auto;\n  --max-height: auto;\n  --white-space: pre-wrap;\n  left: 0;\n  top: 0;\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  outline: none;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  contain: strict;\n  z-index: 1001;\n  pointer-events: none;\n}\n:host-context([dir=rtl]) {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\n:host(.overlay-hidden) {\n  display: none;\n}\n\n:host(.ion-color) {\n  --button-color: inherit;\n  color: var(--ion-color-contrast);\n}\n\n:host(.ion-color) .toast-button-cancel {\n  color: inherit;\n}\n\n:host(.ion-color) .toast-wrapper {\n  background: var(--ion-color-base);\n}\n\n.toast-wrapper {\n  border-radius: var(--border-radius);\n  left: var(--start);\n  right: var(--end);\n  width: var(--width);\n  min-width: var(--min-width);\n  max-width: var(--max-width);\n  height: var(--height);\n  min-height: var(--min-height);\n  max-height: var(--max-height);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  background: var(--background);\n  -webkit-box-shadow: var(--box-shadow);\n  box-shadow: var(--box-shadow);\n}\n[dir=rtl] .toast-wrapper, :host-context([dir=rtl]) .toast-wrapper {\n  left: unset;\n  right: unset;\n  left: var(--end);\n  right: var(--start);\n}\n\n.toast-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  pointer-events: auto;\n  height: inherit;\n  min-height: inherit;\n  max-height: inherit;\n  contain: content;\n}\n\n.toast-content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.toast-message {\n  -ms-flex: 1;\n  flex: 1;\n  white-space: var(--white-space);\n}\n\n.toast-button-group {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.toast-button {\n  border: 0;\n  outline: none;\n  color: var(--button-color);\n  z-index: 0;\n}\n\n.toast-icon {\n  font-size: 1.4em;\n}\n\n.toast-button-inner {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n\@media (any-hover: hover) {\n  .toast-button:hover {\n    cursor: pointer;\n  }\n}\n:host {\n  --background: var(--ion-color-step-50, #f2f2f2);\n  --border-radius: 14px;\n  --button-color: var(--ion-color-primary, #3880ff);\n  --color: var(--ion-color-step-850, #262626);\n  --max-width: 700px;\n  --start: 10px;\n  --end: 10px;\n  font-size: 14px;\n}\n\n.toast-wrapper {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n  display: block;\n  position: absolute;\n  z-index: 10;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .toast-wrapper {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: auto;\n    margin-inline-start: auto;\n    -webkit-margin-end: auto;\n    margin-inline-end: auto;\n  }\n}\n\n\@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))) {\n  :host(.toast-translucent) .toast-wrapper {\n    background: rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);\n    -webkit-backdrop-filter: saturate(180%) blur(20px);\n    backdrop-filter: saturate(180%) blur(20px);\n  }\n}\n.toast-wrapper.toast-top {\n  -webkit-transform: translate3d(0,  -100%,  0);\n  transform: translate3d(0,  -100%,  0);\n  top: 0;\n}\n\n.toast-wrapper.toast-middle {\n  opacity: 0.01;\n}\n\n.toast-wrapper.toast-bottom {\n  -webkit-transform: translate3d(0,  100%,  0);\n  transform: translate3d(0,  100%,  0);\n  bottom: 0;\n}\n\n.toast-content {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .toast-content {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 15px;\n    padding-inline-start: 15px;\n    -webkit-padding-end: 15px;\n    padding-inline-end: 15px;\n  }\n}\n\n.toast-header {\n  margin-bottom: 2px;\n  font-weight: 500;\n}\n\n.toast-button {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  height: 44px;\n  -webkit-transition: background-color, opacity 100ms linear;\n  transition: background-color, opacity 100ms linear;\n  border: 0;\n  background-color: transparent;\n  font-family: var(--ion-font-family);\n  font-size: 17px;\n  font-weight: 500;\n  overflow: hidden;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .toast-button {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 15px;\n    padding-inline-start: 15px;\n    -webkit-padding-end: 15px;\n    padding-inline-end: 15px;\n  }\n}\n\n.toast-button.ion-activated {\n  opacity: 0.4;\n}\n\n\@media (any-hover: hover) {\n  .toast-button:hover {\n    opacity: 0.6;\n  }\n}"; }
};
const buttonClass = (button) => {
    return Object.assign({ 'toast-button': true, 'toast-button-icon-only': button.icon !== undefined && button.text === undefined, [`toast-button-${button.role}`]: button.role !== undefined, 'ion-focusable': true, 'ion-activatable': true }, theme.getClassMap(button.cssClass));
};

exports.ion_toast = Toast;
