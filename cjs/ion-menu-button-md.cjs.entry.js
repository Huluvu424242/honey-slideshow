'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
require('./hardware-back-button-886c770d.js');
const theme = require('./theme-43d6bd40.js');
require('./helpers-31e8d80a.js');
require('./animation-8a037437.js');
const index$4 = require('./index-419c7ea6.js');
const menuToggleUtil = require('./menu-toggle-util-aea545f7.js');

const MenuButton = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.visible = false;
        /**
         * If `true`, the user cannot interact with the menu button.
         */
        this.disabled = false;
        /**
         * Automatically hides the menu button when the corresponding menu is not active
         */
        this.autoHide = true;
        /**
         * The type of the button.
         */
        this.type = 'button';
        this.onClick = async () => {
            return index$4.menuController.toggle(this.menu);
        };
    }
    componentDidLoad() {
        this.visibilityChanged();
    }
    async visibilityChanged() {
        this.visible = await menuToggleUtil.updateVisibility(this.menu);
    }
    render() {
        const { color, disabled } = this;
        const mode = core.getIonMode(this);
        const menuIcon = core.config.get('menuIcon', mode === 'ios' ? 'menu-outline' : 'menu-sharp');
        const hidden = this.autoHide && !this.visible;
        const attrs = {
            type: this.type
        };
        return (core.h(core.Host, { onClick: this.onClick, "aria-disabled": disabled ? 'true' : null, "aria-hidden": hidden ? 'true' : null, class: Object.assign(Object.assign({ [mode]: true }, theme.createColorClasses(color)), { 'button': true, 'menu-button-hidden': hidden, 'menu-button-disabled': disabled, 'in-toolbar': theme.hostContext('ion-toolbar', this.el), 'in-toolbar-color': theme.hostContext('ion-toolbar[color]', this.el), 'ion-activatable': true, 'ion-focusable': true }) }, core.h("button", Object.assign({}, attrs, { disabled: disabled, class: "button-native" }), core.h("span", { class: "button-inner" }, core.h("slot", null, core.h("ion-icon", { icon: menuIcon, mode: mode, lazy: false }))), mode === 'md' && core.h("ion-ripple-effect", { type: "unbounded" }))));
    }
    get el() { return core.getElement(this); }
    static get style() { return ":host {\n  /**\n   * \@prop --border-radius: Border radius of the menu button\n   *\n   * \@prop --background: Background of the menu button\n   * \@prop --background-hover: Background of the menu button on hover\n   * \@prop --background-hover-opacity: Opacity of the background on hover\n   * \@prop --background-focused: Background of the menu button when focused with the tab key\n   * \@prop --background-focused-opacity: Opacity of the menu button background when focused with the tab key\n   *\n   * \@prop --color: Color of the menu button\n   * \@prop --color-hover: Color of the menu button on hover\n   * \@prop --color-focused: Color of the menu button when focused with the tab key\n   *\n   * \@prop --padding-top: Top padding of the button\n   * \@prop --padding-end: Right padding if direction is left-to-right, and left padding if direction is right-to-left of the button\n   * \@prop --padding-bottom: Bottom padding of the button\n   * \@prop --padding-start: Left padding if direction is left-to-right, and right padding if direction is right-to-left of the button\n   */\n  --background: transparent;\n  --color-focused: currentColor;\n  --border-radius: initial;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  color: var(--color);\n  text-align: center;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  -webkit-font-kerning: none;\n  font-kerning: none;\n}\n\n.button-native {\n  border-radius: var(--border-radius);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-indent: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  outline: none;\n  background: var(--background);\n  line-height: 1;\n  cursor: pointer;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .button-native {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--padding-start);\n    padding-inline-start: var(--padding-start);\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n\n.button-inner {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\nion-icon {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  pointer-events: none;\n}\n\n:host(.menu-button-hidden) {\n  display: none;\n}\n\n:host(.menu-button-disabled) {\n  cursor: default;\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n:host(.ion-focused) .button-native {\n  color: var(--color-focused);\n}\n:host(.ion-focused) .button-native::after {\n  background: var(--background-focused);\n  opacity: var(--background-focused-opacity);\n}\n\n.button-native::after {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  content: \"\";\n  opacity: 0;\n}\n\n\@media (any-hover: hover) {\n  :host(:hover) .button-native {\n    color: var(--color-hover);\n  }\n  :host(:hover) .button-native::after {\n    background: var(--background-hover);\n    opacity: var(--background-hover-opacity, 0);\n  }\n}\n:host(.ion-color) .button-native {\n  color: var(--ion-color-base);\n}\n\n:host(.in-toolbar:not(.in-toolbar-color)) {\n  color: var(--ion-toolbar-color, var(--color));\n}\n\n:host {\n  --background-focused: currentColor;\n  --background-focused-opacity: .12;\n  --background-hover: currentColor;\n  --background-hover-opacity: .04;\n  --border-radius: 50%;\n  --color: initial;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  width: 48px;\n  height: 48px;\n  font-size: 24px;\n}\n\n:host(.ion-color.ion-focused)::after {\n  background: var(--ion-color-base);\n}\n\n\@media (any-hover: hover) {\n  :host(.ion-color:hover) .button-native::after {\n    background: var(--ion-color-base);\n  }\n}"; }
};

exports.ion_menu_button = MenuButton;
