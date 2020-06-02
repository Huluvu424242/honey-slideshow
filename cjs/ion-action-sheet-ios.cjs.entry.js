'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
require('./hardware-back-button-886c770d.js');
const overlays = require('./overlays-21fbeaca.js');
const theme = require('./theme-43d6bd40.js');
require('./helpers-31e8d80a.js');
const animation = require('./animation-8a037437.js');

/**
 * iOS Action Sheet Enter Animation
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
        .addElement(baseEl.querySelector('.action-sheet-wrapper'))
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * iOS Action Sheet Leave Animation
 */
const iosLeaveAnimation = (baseEl) => {
    const baseAnimation = animation.createAnimation();
    const backdropAnimation = animation.createAnimation();
    const wrapperAnimation = animation.createAnimation();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 'var(--backdrop-opacity)', 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.action-sheet-wrapper'))
        .fromTo('transform', 'translateY(0%)', 'translateY(100%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(450)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * MD Action Sheet Enter Animation
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
        .addElement(baseEl.querySelector('.action-sheet-wrapper'))
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * MD Action Sheet Leave Animation
 */
const mdLeaveAnimation = (baseEl) => {
    const baseAnimation = animation.createAnimation();
    const backdropAnimation = animation.createAnimation();
    const wrapperAnimation = animation.createAnimation();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 'var(--backdrop-opacity)', 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.action-sheet-wrapper'))
        .fromTo('transform', 'translateY(0%)', 'translateY(100%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(450)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

const ActionSheet = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.presented = false;
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * An array of buttons for the action sheet.
         */
        this.buttons = [];
        /**
         * If `true`, the action sheet will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = true;
        /**
         * If `true`, the action sheet will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * If `true`, the action sheet will animate.
         */
        this.animated = true;
        this.onBackdropTap = () => {
            this.dismiss(undefined, overlays.BACKDROP);
        };
        this.dispatchCancelHandler = (ev) => {
            const role = ev.detail.role;
            if (overlays.isCancel(role)) {
                const cancelButton = this.getButtons().find(b => b.role === 'cancel');
                this.callButtonHandler(cancelButton);
            }
        };
        overlays.prepareOverlay(this.el);
        this.didPresent = core.createEvent(this, "ionActionSheetDidPresent", 7);
        this.willPresent = core.createEvent(this, "ionActionSheetWillPresent", 7);
        this.willDismiss = core.createEvent(this, "ionActionSheetWillDismiss", 7);
        this.didDismiss = core.createEvent(this, "ionActionSheetDidDismiss", 7);
    }
    /**
     * Present the action sheet overlay after it has been created.
     */
    present() {
        return overlays.present(this, 'actionSheetEnter', iosEnterAnimation, mdEnterAnimation);
    }
    /**
     * Dismiss the action sheet overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the action sheet.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the action sheet.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */
    dismiss(data, role) {
        return overlays.dismiss(this, data, role, 'actionSheetLeave', iosLeaveAnimation, mdLeaveAnimation);
    }
    /**
     * Returns a promise that resolves when the action sheet did dismiss.
     */
    onDidDismiss() {
        return overlays.eventMethod(this.el, 'ionActionSheetDidDismiss');
    }
    /**
     * Returns a promise that resolves when the action sheet will dismiss.
     *
     */
    onWillDismiss() {
        return overlays.eventMethod(this.el, 'ionActionSheetWillDismiss');
    }
    async buttonClick(button) {
        const role = button.role;
        if (overlays.isCancel(role)) {
            return this.dismiss(undefined, role);
        }
        const shouldDismiss = await this.callButtonHandler(button);
        if (shouldDismiss) {
            return this.dismiss(undefined, button.role);
        }
        return Promise.resolve();
    }
    async callButtonHandler(button) {
        if (button) {
            // a handler has been provided, execute it
            // pass the handler the values from the inputs
            const rtn = await overlays.safeCall(button.handler);
            if (rtn === false) {
                // if the return value of the handler is false then do not dismiss
                return false;
            }
        }
        return true;
    }
    getButtons() {
        return this.buttons.map(b => {
            return (typeof b === 'string')
                ? { text: b }
                : b;
        });
    }
    render() {
        const mode = core.getIonMode(this);
        const allButtons = this.getButtons();
        const cancelButton = allButtons.find(b => b.role === 'cancel');
        const buttons = allButtons.filter(b => b.role !== 'cancel');
        return (core.h(core.Host, { role: "dialog", "aria-modal": "true", tabindex: "-1", style: {
                zIndex: `${20000 + this.overlayIndex}`,
            }, class: Object.assign(Object.assign({ [mode]: true }, theme.getClassMap(this.cssClass)), { 'action-sheet-translucent': this.translucent }), onIonActionSheetWillDismiss: this.dispatchCancelHandler, onIonBackdropTap: this.onBackdropTap }, core.h("ion-backdrop", { tappable: this.backdropDismiss }), core.h("div", { class: "action-sheet-wrapper", role: "dialog" }, core.h("div", { class: "action-sheet-container" }, core.h("div", { class: "action-sheet-group" }, this.header !== undefined &&
            core.h("div", { class: "action-sheet-title" }, this.header, this.subHeader && core.h("div", { class: "action-sheet-sub-title" }, this.subHeader)), buttons.map(b => core.h("button", { type: "button", class: buttonClass(b), onClick: () => this.buttonClick(b) }, core.h("span", { class: "action-sheet-button-inner" }, b.icon && core.h("ion-icon", { icon: b.icon, lazy: false, class: "action-sheet-icon" }), b.text), mode === 'md' && core.h("ion-ripple-effect", null)))), cancelButton &&
            core.h("div", { class: "action-sheet-group action-sheet-group-cancel" }, core.h("button", { type: "button", class: buttonClass(cancelButton), onClick: () => this.buttonClick(cancelButton) }, core.h("span", { class: "action-sheet-button-inner" }, cancelButton.icon &&
                core.h("ion-icon", { icon: cancelButton.icon, lazy: false, class: "action-sheet-icon" }), cancelButton.text), mode === 'md' && core.h("ion-ripple-effect", null)))))));
    }
    get el() { return core.getElement(this); }
    static get style() { return ".sc-ion-action-sheet-ios-h {\n  \n  --color: initial;\n  --button-color-activated: var(--button-color);\n  --button-color-focused: var(--button-color);\n  --button-color-hover: var(--button-color);\n  --button-color-selected: var(--button-color);\n  --min-width: auto;\n  --width: 100%;\n  --max-width: 500px;\n  --min-height: auto;\n  --height: 100%;\n  --max-height: calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: block;\n  position: fixed;\n  outline: none;\n  font-family: var(--ion-font-family, inherit);\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 1001;\n}\n\n.overlay-hidden.sc-ion-action-sheet-ios-h {\n  display: none;\n}\n\n.action-sheet-wrapper.sc-ion-action-sheet-ios {\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n  -webkit-transform: translate3d(0,  100%,  0);\n  transform: translate3d(0,  100%,  0);\n  display: block;\n  position: absolute;\n  width: var(--width);\n  min-width: var(--min-width);\n  max-width: var(--max-width);\n  height: var(--height);\n  min-height: var(--min-height);\n  max-height: var(--max-height);\n  z-index: 10;\n  pointer-events: none;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .action-sheet-wrapper.sc-ion-action-sheet-ios {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: auto;\n    margin-inline-start: auto;\n    -webkit-margin-end: auto;\n    margin-inline-end: auto;\n  }\n}\n\n.action-sheet-button.sc-ion-action-sheet-ios {\n  display: block;\n  position: relative;\n  width: 100%;\n  border: 0;\n  outline: none;\n  background: var(--button-background);\n  color: var(--button-color);\n  font-family: inherit;\n  overflow: hidden;\n}\n\n.action-sheet-button-inner.sc-ion-action-sheet-ios {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\n.action-sheet-container.sc-ion-action-sheet-ios {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n  flex-flow: column;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  height: 100%;\n  max-height: 100%;\n}\n\n.action-sheet-group.sc-ion-action-sheet-ios {\n  -ms-flex-negative: 2;\n  flex-shrink: 2;\n  overscroll-behavior-y: contain;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  pointer-events: all;\n  background: var(--background);\n}\n\n.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar {\n  display: none;\n}\n\n.action-sheet-group-cancel.sc-ion-action-sheet-ios {\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n\n.action-sheet-button.sc-ion-action-sheet-ios::after {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  content: \"\";\n  opacity: 0;\n}\n\n.action-sheet-selected.sc-ion-action-sheet-ios {\n  color: var(--button-color-selected);\n}\n.action-sheet-selected.sc-ion-action-sheet-ios::after {\n  background: var(--button-background-selected);\n  opacity: var(--button-background-selected-opacity);\n}\n\n.action-sheet-button.ion-activated.sc-ion-action-sheet-ios {\n  color: var(--button-color-activated);\n}\n.action-sheet-button.ion-activated.sc-ion-action-sheet-ios::after {\n  background: var(--button-background-activated);\n  opacity: var(--button-background-activated-opacity);\n}\n\n.action-sheet-button.ion-focused.sc-ion-action-sheet-ios {\n  color: var(--button-color-focused);\n}\n.action-sheet-button.ion-focused.sc-ion-action-sheet-ios::after {\n  background: var(--button-background-focused);\n  opacity: var(--button-background-focused-opacity);\n}\n\n\@media (any-hover: hover) {\n  .action-sheet-button.sc-ion-action-sheet-ios:hover {\n    color: var(--button-color-hover);\n  }\n  .action-sheet-button.sc-ion-action-sheet-ios:hover::after {\n    background: var(--button-background-hover);\n    opacity: var(--button-background-hover-opacity);\n  }\n}\n.sc-ion-action-sheet-ios-h {\n  --background: var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));\n  --backdrop-opacity: var(--ion-backdrop-opacity, 0.4);\n  --button-background: linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent;\n  --button-background-activated: var(--ion-text-color, #000);\n  --button-background-activated-opacity: .08;\n  --button-background-hover: currentColor;\n  --button-background-hover-opacity: .04;\n  --button-background-focused: currentColor;\n  --button-background-focused-opacity: .12;\n  --button-background-selected: var(--ion-color-step-150, var(--ion-background-color, #fff));\n  --button-background-selected-opacity: 1;\n  --button-color: var(--ion-color-primary, #3880ff);\n  --color: var(--ion-color-step-400, #999999);\n  text-align: center;\n}\n\n.action-sheet-wrapper.sc-ion-action-sheet-ios {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: var(--ion-safe-area-top, 0);\n  margin-bottom: var(--ion-safe-area-bottom, 0);\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .action-sheet-wrapper.sc-ion-action-sheet-ios {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: auto;\n    margin-inline-start: auto;\n    -webkit-margin-end: auto;\n    margin-inline-end: auto;\n  }\n}\n\n.action-sheet-container.sc-ion-action-sheet-ios {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .action-sheet-container.sc-ion-action-sheet-ios {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 8px;\n    padding-inline-start: 8px;\n    -webkit-padding-end: 8px;\n    padding-inline-end: 8px;\n  }\n}\n\n.action-sheet-group.sc-ion-action-sheet-ios {\n  border-radius: 13px;\n  margin-bottom: 8px;\n}\n.action-sheet-group.sc-ion-action-sheet-ios:first-child {\n  margin-top: 10px;\n}\n.action-sheet-group.sc-ion-action-sheet-ios:last-child {\n  margin-bottom: 10px;\n}\n\@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))) {\n  .action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios {\n    background-color: transparent;\n    -webkit-backdrop-filter: saturate(280%) blur(20px);\n    backdrop-filter: saturate(280%) blur(20px);\n  }\n\n  .action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios, .action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios {\n    background-color: transparent;\n    background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8))), -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));\n    background-image: linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%), linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4) 50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 50%);\n    background-repeat: no-repeat;\n    \n    background-position: top, bottom;\n    background-size: 100% calc(100% - 1px), 100% 1px;\n    -webkit-backdrop-filter: saturate(120%);\n    backdrop-filter: saturate(120%);\n  }\n\n  .action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios {\n    background-color: rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.7);\n    background-image: none;\n  }\n\n  .action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios {\n    background: var(--button-background-selected);\n  }\n}\n.action-sheet-title.sc-ion-action-sheet-ios {\n  background: -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, transparent)) bottom/100% 1px no-repeat transparent;\n  background: linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent;\n}\n\n.action-sheet-title.sc-ion-action-sheet-ios {\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 14px;\n  padding-bottom: 13px;\n  color: var(--color, var(--ion-color-step-400, #999999));\n  font-size: 13px;\n  font-weight: 400;\n  text-align: center;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .action-sheet-title.sc-ion-action-sheet-ios {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 10px;\n    padding-inline-start: 10px;\n    -webkit-padding-end: 10px;\n    padding-inline-end: 10px;\n  }\n}\n\n.action-sheet-sub-title.sc-ion-action-sheet-ios {\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 15px;\n  padding-bottom: 0;\n  font-size: 12px;\n}\n\n.action-sheet-button.sc-ion-action-sheet-ios {\n  padding-left: 18px;\n  padding-right: 18px;\n  padding-top: 18px;\n  padding-bottom: 18px;\n  height: 56px;\n  font-size: 20px;\n  contain: strict;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .action-sheet-button.sc-ion-action-sheet-ios {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 18px;\n    padding-inline-start: 18px;\n    -webkit-padding-end: 18px;\n    padding-inline-end: 18px;\n  }\n}\n\n.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios {\n  margin-right: 0.1em;\n  font-size: 28px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios {\n    margin-right: unset;\n    -webkit-margin-end: 0.1em;\n    margin-inline-end: 0.1em;\n  }\n}\n\n.action-sheet-button.sc-ion-action-sheet-ios:last-child {\n  background-image: none;\n}\n\n.action-sheet-selected.sc-ion-action-sheet-ios {\n  font-weight: bold;\n}\n\n.action-sheet-cancel.sc-ion-action-sheet-ios {\n  font-weight: 600;\n}\n.action-sheet-cancel.sc-ion-action-sheet-ios::after {\n  background: var(--button-background-selected);\n  opacity: var(--button-background-selected-opacity);\n}\n\n.action-sheet-destructive.sc-ion-action-sheet-ios, .action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios, .action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios {\n  color: var(--ion-color-danger, #eb445a);\n}\n\n\@media (any-hover: hover) {\n  .action-sheet-destructive.sc-ion-action-sheet-ios:hover {\n    color: var(--ion-color-danger, #eb445a);\n  }\n}"; }
};
const buttonClass = (button) => {
    return Object.assign({ 'action-sheet-button': true, 'ion-activatable': true, 'ion-focusable': true, [`action-sheet-${button.role}`]: button.role !== undefined }, theme.getClassMap(button.cssClass));
};

exports.ion_action_sheet = ActionSheet;
