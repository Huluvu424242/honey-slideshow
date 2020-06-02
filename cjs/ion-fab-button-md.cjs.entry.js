'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
const theme = require('./theme-43d6bd40.js');

const FabButton = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * If `true`, the fab button will be show a close icon.
         */
        this.activated = false;
        /**
         * If `true`, the user cannot interact with the fab button.
         */
        this.disabled = false;
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
        /**
         * If `true`, the fab button will show when in a fab-list.
         */
        this.show = false;
        /**
         * If `true`, the fab button will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * The type of the button.
         */
        this.type = 'button';
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.ionBlur.emit();
        };
        this.ionFocus = core.createEvent(this, "ionFocus", 7);
        this.ionBlur = core.createEvent(this, "ionBlur", 7);
    }
    render() {
        const { el, disabled, color, href, activated, show, translucent, size } = this;
        const inList = theme.hostContext('ion-fab-list', el);
        const mode = core.getIonMode(this);
        const TagType = href === undefined ? 'button' : 'a';
        const attrs = (TagType === 'button')
            ? { type: this.type }
            : {
                download: this.download,
                href,
                rel: this.rel,
                target: this.target
            };
        return (core.h(core.Host, { "aria-disabled": disabled ? 'true' : null, class: Object.assign(Object.assign({}, theme.createColorClasses(color)), { [mode]: true, 'fab-button-in-list': inList, 'fab-button-translucent-in-list': inList && translucent, 'fab-button-close-active': activated, 'fab-button-show': show, 'fab-button-disabled': disabled, 'fab-button-translucent': translucent, 'ion-activatable': true, 'ion-focusable': true, [`fab-button-${size}`]: size !== undefined }) }, core.h(TagType, Object.assign({}, attrs, { class: "button-native", disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur, onClick: (ev) => theme.openURL(href, ev, this.routerDirection) }), core.h("span", { class: "close-icon" }, core.h("ion-icon", { name: "close", lazy: false })), core.h("span", { class: "button-inner" }, core.h("slot", null)), mode === 'md' && core.h("ion-ripple-effect", null))));
    }
    get el() { return core.getElement(this); }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the button\n   * \@prop --background-activated: Background of the button when pressed. Note: setting this will interfere with the Material Design ripple.\n   * \@prop --background-activated-opacity: Opacity of the button background when pressed\n   * \@prop --background-focused: Background of the button when focused with the tab key\n   * \@prop --background-focused-opacity: Opacity of the button background when focused with the tab key\n   * \@prop --background-hover: Background of the button on hover\n   * \@prop --background-hover-opacity: Opacity of the button background on hover\n   *\n   * \@prop --color: Text color of the button\n   * \@prop --color-activated: Text color of the button when pressed\n   * \@prop --color-focused: Text color of the button when focused with the tab key\n   * \@prop --color-hover: Text color of the button on hover\n   *\n   * \@prop --transition: Transition of the button\n   *\n   * \@prop --border-radius: Border radius of the button\n   * \@prop --border-width: Border width of the button\n   * \@prop --border-style: Border style of the button\n   * \@prop --border-color: Border color of the button\n   *\n   * \@prop --ripple-color: Color of the button ripple effect\n   *\n   * \@prop --box-shadow: Box shadow of the button\n   *\n   * \@prop --padding-top: Top padding of the button\n   * \@prop --padding-end: Right padding if direction is left-to-right, and left padding if direction is right-to-left of the button\n   * \@prop --padding-bottom: Bottom padding of the button\n   * \@prop --padding-start: Left padding if direction is left-to-right, and right padding if direction is right-to-left of the button\n   */\n  --color-activated: var(--color);\n  --color-focused: var(--color);\n  --color-hover: var(--color);\n  --background-hover: var(--ion-color-primary-contrast, #fff);\n  --background-hover-opacity: .08;\n  --transition: background-color, opacity 100ms linear;\n  --ripple-color: currentColor;\n  --border-radius: 50%;\n  --border-width: 0;\n  --border-style: none;\n  --border-color: initial;\n  --padding-top: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  display: block;\n  width: 56px;\n  height: 56px;\n  font-size: 14px;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  -webkit-font-kerning: none;\n  font-kerning: none;\n}\n\n.button-native {\n  border-radius: var(--border-radius);\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-indent: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: var(--transform);\n  transform: var(--transform);\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  outline: none;\n  background: var(--background);\n  background-clip: padding-box;\n  color: var(--color);\n  -webkit-box-shadow: var(--box-shadow);\n  box-shadow: var(--box-shadow);\n  contain: strict;\n  cursor: pointer;\n  overflow: hidden;\n  z-index: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .button-native {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--padding-start);\n    padding-inline-start: var(--padding-start);\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n\n::slotted(ion-icon) {\n  line-height: 1;\n}\n\n.button-native::after {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  content: \"\";\n  opacity: 0;\n}\n\n.button-inner {\n  left: 0;\n  right: 0;\n  top: 0;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  height: 100%;\n  -webkit-transition: all ease-in-out 300ms;\n  transition: all ease-in-out 300ms;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n  z-index: 1;\n}\n\n:host(.fab-button-disabled) {\n  cursor: default;\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n\@media (any-hover: hover) {\n  :host(:hover) .button-native {\n    color: var(--color-hover);\n  }\n  :host(:hover) .button-native::after {\n    background: var(--background-hover);\n    opacity: var(--background-hover-opacity);\n  }\n}\n:host(.ion-focused) .button-native {\n  color: var(--color-focused);\n}\n:host(.ion-focused) .button-native::after {\n  background: var(--background-focused);\n  opacity: var(--background-focused-opacity);\n}\n\n:host(.ion-activated) .button-native {\n  color: var(--color-activated);\n}\n:host(.ion-activated) .button-native::after {\n  background: var(--background-activated);\n  opacity: var(--background-activated-opacity);\n}\n\n::slotted(ion-icon) {\n  line-height: 1;\n}\n\n:host(.fab-button-small) {\n  margin-left: 8px;\n  margin-right: 8px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  width: 40px;\n  height: 40px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.fab-button-small) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 8px;\n    margin-inline-start: 8px;\n    -webkit-margin-end: 8px;\n    margin-inline-end: 8px;\n  }\n}\n\n.close-icon {\n  left: 0;\n  right: 0;\n  top: 0;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  height: 100%;\n  -webkit-transform: scale(0.4) rotateZ(-45deg);\n  transform: scale(0.4) rotateZ(-45deg);\n  -webkit-transition: all ease-in-out 300ms;\n  transition: all ease-in-out 300ms;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n  opacity: 0;\n  z-index: 1;\n}\n\n:host(.fab-button-close-active) .close-icon {\n  -webkit-transform: scale(1) rotateZ(0deg);\n  transform: scale(1) rotateZ(0deg);\n  opacity: 1;\n}\n\n:host(.fab-button-close-active) .button-inner {\n  -webkit-transform: scale(0.4) rotateZ(45deg);\n  transform: scale(0.4) rotateZ(45deg);\n  opacity: 0;\n}\n\nion-ripple-effect {\n  color: var(--ripple-color);\n}\n\n\@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))) {\n  :host(.fab-button-translucent) .button-native {\n    -webkit-backdrop-filter: var(--backdrop-filter);\n    backdrop-filter: var(--backdrop-filter);\n  }\n}\n:host(.ion-color) .button-native {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast);\n}\n\n:host {\n  --background: var(--ion-color-primary, #3880ff);\n  --background-activated: transparent;\n  --background-focused: currentColor;\n  --background-hover: currentColor;\n  --background-activated-opacity: 0;\n  --background-focused-opacity: .24;\n  --background-hover-opacity: .08;\n  --color: var(--ion-color-primary-contrast, #fff);\n  --box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  --transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 280ms cubic-bezier(0.4, 0, 0.2, 1), color 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;\n}\n\n:host(.ion-activated) {\n  --box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n\n::slotted(ion-icon),\n.close-icon {\n  font-size: 24px;\n}\n\n:host(.fab-button-in-list) {\n  --color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);\n  --color-activated: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);\n  --color-focused: var(--color-activated);\n  --background: var(--ion-color-light, #f4f5f8);\n  --background-activated: transparent;\n  --background-focused: var(--ion-color-light-shade, #d7d8da);\n  --background-hover: var(--ion-color-light-tint, #f5f6f9);\n}\n\n:host(.fab-button-in-list) ::slotted(ion-icon) {\n  font-size: 18px;\n}\n\n:host(.ion-color.ion-focused) .button-native {\n  color: var(--ion-color-contrast);\n}\n:host(.ion-color.ion-focused) .button-native::after {\n  background: var(--ion-color-contrast);\n}\n\n:host(.ion-color.ion-activated) .button-native {\n  color: var(--ion-color-contrast);\n}\n:host(.ion-color.ion-activated) .button-native::after {\n  background: transparent;\n}\n\n\@media (any-hover: hover) {\n  :host(.ion-color:hover) .button-native {\n    color: var(--ion-color-contrast);\n  }\n  :host(.ion-color:hover) .button-native::after {\n    background: var(--ion-color-contrast);\n  }\n}"; }
};

exports.ion_fab_button = FabButton;
