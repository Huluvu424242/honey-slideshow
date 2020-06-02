'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
const theme = require('./theme-43d6bd40.js');

const BackButton = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * If `true`, the user cannot interact with the button.
         */
        this.disabled = false;
        /**
         * The type of the button.
         */
        this.type = 'button';
        this.onClick = async (ev) => {
            const nav = this.el.closest('ion-nav');
            ev.preventDefault();
            if (nav && await nav.canGoBack()) {
                return nav.pop({ skipIfBusy: true });
            }
            return theme.openURL(this.defaultHref, ev, 'back');
        };
    }
    componentWillLoad() {
        if (this.defaultHref === undefined) {
            this.defaultHref = core.config.get('backButtonDefaultHref');
        }
    }
    get backButtonIcon() {
        const icon = this.icon;
        if (icon != null) {
            // icon is set on the component or by the config
            return icon;
        }
        if (core.getIonMode(this) === 'ios') {
            // default ios back button icon
            return core.config.get('backButtonIcon', 'chevron-back');
        }
        // default md back button icon
        return core.config.get('backButtonIcon', 'arrow-back-sharp');
    }
    get backButtonText() {
        const defaultBackButtonText = core.getIonMode(this) === 'ios' ? 'Back' : null;
        return this.text != null ? this.text : core.config.get('backButtonText', defaultBackButtonText);
    }
    get hasIconOnly() {
        return this.backButtonIcon && !this.backButtonText;
    }
    get rippleType() {
        // If the button only has an icon we use the unbounded
        // "circular" ripple effect
        if (this.hasIconOnly) {
            return 'unbounded';
        }
        return 'bounded';
    }
    render() {
        const { color, defaultHref, disabled, type, hasIconOnly, backButtonIcon, backButtonText } = this;
        const showBackButton = defaultHref !== undefined;
        const mode = core.getIonMode(this);
        return (core.h(core.Host, { onClick: this.onClick, class: Object.assign(Object.assign({}, theme.createColorClasses(color)), { [mode]: true, 'button': true, 'back-button-disabled': disabled, 'back-button-has-icon-only': hasIconOnly, 'in-toolbar': theme.hostContext('ion-toolbar', this.el), 'in-toolbar-color': theme.hostContext('ion-toolbar[color]', this.el), 'ion-activatable': true, 'ion-focusable': true, 'show-back-button': showBackButton }) }, core.h("button", { type: type, disabled: disabled, class: "button-native", "aria-label": backButtonText || 'back' }, core.h("span", { class: "button-inner" }, backButtonIcon && core.h("ion-icon", { icon: backButtonIcon, "aria-hidden": "true", lazy: false }), backButtonText && core.h("span", { "aria-hidden": "true", class: "button-text" }, backButtonText)), mode === 'md' && core.h("ion-ripple-effect", { type: this.rippleType }))));
    }
    get el() { return core.getElement(this); }
    static get style() { return ":host {\n  /**\n    * \@prop --background: Background of the button\n    * \@prop --background-focused: Background of the button when focused with the tab key\n    * \@prop --background-focused-opacity: Opacity of the button background when focused with the tab key\n    * \@prop --background-hover: Background of the button on hover\n    * \@prop --background-hover-opacity: Opacity of the background on hover\n    *\n    * \@prop --color: Text color of the button\n    * \@prop --color-focused: Text color of the button when focused with the tab key\n    * \@prop --color-hover: Text color of the button on hover\n    *\n    * \@prop --min-width: Minimum width of the button\n    * \@prop --min-height: Minimum height of the button\n    *\n    * \@prop --transition: Transition of the button\n    *\n    * \@prop --border-radius: Border radius of the button\n    *\n    * \@prop --ripple-color: Color of the button ripple effect\n    *\n    * \@prop --opacity: Opacity of the button\n    *\n    * \@prop --margin-top: Top margin of the button\n    * \@prop --margin-end: Right margin if direction is left-to-right, and left margin if direction is right-to-left of the button\n    * \@prop --margin-bottom: Bottom margin of the button\n    * \@prop --margin-start: Left margin if direction is left-to-right, and right margin if direction is right-to-left of the button\n    *\n    * \@prop --padding-top: Top padding of the button\n    * \@prop --padding-end: Right padding if direction is left-to-right, and left padding if direction is right-to-left of the button\n    * \@prop --padding-bottom: Bottom padding of the button\n    * \@prop --padding-start: Left padding if direction is left-to-right, and right padding if direction is right-to-left of the button\n    *\n    * \@prop --icon-margin-top: Top margin of the button icon\n    * \@prop --icon-margin-end: Right margin if direction is left-to-right, and left margin if direction is right-to-left of the button icon\n    * \@prop --icon-margin-bottom: Bottom margin of the button icon\n    * \@prop --icon-margin-start: Left margin if direction is left-to-right, and right margin if direction is right-to-left of the button icon\n    *\n    * \@prop --icon-padding-top: Top padding of the button icon\n    * \@prop --icon-padding-end: Right padding if direction is left-to-right, and left padding if direction is right-to-left of the button icon\n    * \@prop --icon-padding-bottom: Bottom padding of the button icon\n    * \@prop --icon-padding-start: Left padding if direction is left-to-right, and right padding if direction is right-to-left of the button icon\n    *\n    * \@prop --icon-font-size: Font size of the button icon\n    * \@prop --icon-font-weight: Font weight of the button icon\n    */\n  --background: transparent;\n  --color-focused: currentColor;\n  --color-hover: currentColor;\n  --icon-margin-top: 0;\n  --icon-margin-bottom: 0;\n  --icon-padding-top: 0;\n  --icon-padding-end: 0;\n  --icon-padding-bottom: 0;\n  --icon-padding-start: 0;\n  --margin-top: 0;\n  --margin-end: 0;\n  --margin-bottom: 0;\n  --margin-start: 0;\n  --min-width: auto;\n  --min-height: auto;\n  --padding-top: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --opacity: 1;\n  --ripple-color: currentColor;\n  --transition: background-color, opacity 100ms linear;\n  display: none;\n  min-width: var(--min-width);\n  min-height: var(--min-height);\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  text-align: center;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-font-kerning: none;\n  font-kerning: none;\n}\n\n:host(.ion-color) .button-native {\n  color: var(--ion-color-base);\n}\n\n:host(.show-back-button) {\n  display: block;\n}\n\n:host(.back-button-disabled) {\n  cursor: default;\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.button-native {\n  border-radius: var(--border-radius);\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: var(--margin-start);\n  margin-right: var(--margin-end);\n  margin-top: var(--margin-top);\n  margin-bottom: var(--margin-bottom);\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-indent: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border: 0;\n  outline: none;\n  background: var(--background);\n  line-height: 1;\n  cursor: pointer;\n  opacity: var(--opacity);\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .button-native {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--margin-start);\n    margin-inline-start: var(--margin-start);\n    -webkit-margin-end: var(--margin-end);\n    margin-inline-end: var(--margin-end);\n  }\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .button-native {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--padding-start);\n    padding-inline-start: var(--padding-start);\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n\n.button-inner {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\nion-icon {\n  padding-left: var(--icon-padding-start);\n  padding-right: var(--icon-padding-end);\n  padding-top: var(--icon-padding-top);\n  padding-bottom: var(--icon-padding-bottom);\n  margin-left: var(--icon-margin-start);\n  margin-right: var(--icon-margin-end);\n  margin-top: var(--icon-margin-top);\n  margin-bottom: var(--icon-margin-bottom);\n  display: inherit;\n  font-size: var(--icon-font-size);\n  font-weight: var(--icon-font-weight);\n  pointer-events: none;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ion-icon {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--icon-padding-start);\n    padding-inline-start: var(--icon-padding-start);\n    -webkit-padding-end: var(--icon-padding-end);\n    padding-inline-end: var(--icon-padding-end);\n  }\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ion-icon {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--icon-margin-start);\n    margin-inline-start: var(--icon-margin-start);\n    -webkit-margin-end: var(--icon-margin-end);\n    margin-inline-end: var(--icon-margin-end);\n  }\n}\n\n:host(.ion-focused) .button-native {\n  color: var(--color-focused);\n}\n:host(.ion-focused) .button-native::after {\n  background: var(--background-focused);\n  opacity: var(--background-focused-opacity);\n}\n\n.button-native::after {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  content: \"\";\n  opacity: 0;\n}\n\n\@media (any-hover: hover) {\n  :host(:hover) .button-native {\n    color: var(--color-hover);\n  }\n  :host(:hover) .button-native::after {\n    background: var(--background-hover);\n    opacity: var(--background-hover-opacity);\n  }\n}\n:host(.ion-color.ion-focused) .button-native {\n  color: var(--ion-color-base);\n}\n\n\@media (any-hover: hover) {\n  :host(.ion-color:hover) .button-native {\n    color: var(--ion-color-base);\n  }\n}\n:host(.in-toolbar:not(.in-toolbar-color)) {\n  color: var(--ion-toolbar-color, var(--color));\n}\n\n:host {\n  --border-radius: 4px;\n  --background-focused: currentColor;\n  --background-focused-opacity: .12;\n  --background-hover: currentColor;\n  --background-hover-opacity: 0.04;\n  --color: currentColor;\n  --icon-margin-end: 0;\n  --icon-margin-start: 0;\n  --icon-font-size: 24px;\n  --icon-font-weight: normal;\n  --min-height: 32px;\n  --min-width: 44px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n:host(.back-button-has-icon-only) {\n  --border-radius: 50%;\n  min-width: 48px;\n  height: 48px;\n}\n\n.button-native {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.button-text {\n  padding-left: 4px;\n  padding-right: 4px;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .button-text {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 4px;\n    padding-inline-start: 4px;\n    -webkit-padding-end: 4px;\n    padding-inline-end: 4px;\n  }\n}\n\nion-icon {\n  line-height: 0.67;\n  text-align: start;\n}\n\n\@media (any-hover: hover) {\n  :host(.ion-color:hover) .button-native::after {\n    background: var(--ion-color-base);\n  }\n}\n:host(.ion-color.ion-focused) .button-native::after {\n  background: var(--ion-color-base);\n}"; }
};

exports.ion_back_button = BackButton;
