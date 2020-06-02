import { r as registerInstance, c as getIonMode, d as config, h, H as Host, f as getElement } from './core-df18ef15.js';
import './hardware-back-button-7c214102.js';
import { c as createColorClasses, h as hostContext } from './theme-bda2b980.js';
import './helpers-c3aa5e98.js';
import './animation-5cbe9b9d.js';
import { m as menuController } from './index-17d6e33a.js';
import { u as updateVisibility } from './menu-toggle-util-d92c18d8.js';

const MenuButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            return menuController.toggle(this.menu);
        };
    }
    componentDidLoad() {
        this.visibilityChanged();
    }
    async visibilityChanged() {
        this.visible = await updateVisibility(this.menu);
    }
    render() {
        const { color, disabled } = this;
        const mode = getIonMode(this);
        const menuIcon = config.get('menuIcon', mode === 'ios' ? 'menu-outline' : 'menu-sharp');
        const hidden = this.autoHide && !this.visible;
        const attrs = {
            type: this.type
        };
        return (h(Host, { onClick: this.onClick, "aria-disabled": disabled ? 'true' : null, "aria-hidden": hidden ? 'true' : null, class: Object.assign(Object.assign({ [mode]: true }, createColorClasses(color)), { 'button': true, 'menu-button-hidden': hidden, 'menu-button-disabled': disabled, 'in-toolbar': hostContext('ion-toolbar', this.el), 'in-toolbar-color': hostContext('ion-toolbar[color]', this.el), 'ion-activatable': true, 'ion-focusable': true }) }, h("button", Object.assign({}, attrs, { disabled: disabled, class: "button-native" }), h("span", { class: "button-inner" }, h("slot", null, h("ion-icon", { icon: menuIcon, mode: mode, lazy: false }))), mode === 'md' && h("ion-ripple-effect", { type: "unbounded" }))));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  /**\n   * \@prop --border-radius: Border radius of the menu button\n   *\n   * \@prop --background: Background of the menu button\n   * \@prop --background-hover: Background of the menu button on hover\n   * \@prop --background-hover-opacity: Opacity of the background on hover\n   * \@prop --background-focused: Background of the menu button when focused with the tab key\n   * \@prop --background-focused-opacity: Opacity of the menu button background when focused with the tab key\n   *\n   * \@prop --color: Color of the menu button\n   * \@prop --color-hover: Color of the menu button on hover\n   * \@prop --color-focused: Color of the menu button when focused with the tab key\n   *\n   * \@prop --padding-top: Top padding of the button\n   * \@prop --padding-end: Right padding if direction is left-to-right, and left padding if direction is right-to-left of the button\n   * \@prop --padding-bottom: Bottom padding of the button\n   * \@prop --padding-start: Left padding if direction is left-to-right, and right padding if direction is right-to-left of the button\n   */\n  --background: transparent;\n  --color-focused: currentColor;\n  --border-radius: initial;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  color: var(--color);\n  text-align: center;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  -webkit-font-kerning: none;\n  font-kerning: none;\n}\n\n.button-native {\n  border-radius: var(--border-radius);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-indent: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  outline: none;\n  background: var(--background);\n  line-height: 1;\n  cursor: pointer;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .button-native {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--padding-start);\n    padding-inline-start: var(--padding-start);\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n\n.button-inner {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\nion-icon {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  pointer-events: none;\n}\n\n:host(.menu-button-hidden) {\n  display: none;\n}\n\n:host(.menu-button-disabled) {\n  cursor: default;\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n:host(.ion-focused) .button-native {\n  color: var(--color-focused);\n}\n:host(.ion-focused) .button-native::after {\n  background: var(--background-focused);\n  opacity: var(--background-focused-opacity);\n}\n\n.button-native::after {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  content: \"\";\n  opacity: 0;\n}\n\n\@media (any-hover: hover) {\n  :host(:hover) .button-native {\n    color: var(--color-hover);\n  }\n  :host(:hover) .button-native::after {\n    background: var(--background-hover);\n    opacity: var(--background-hover-opacity, 0);\n  }\n}\n:host(.ion-color) .button-native {\n  color: var(--ion-color-base);\n}\n\n:host(.in-toolbar:not(.in-toolbar-color)) {\n  color: var(--ion-toolbar-color, var(--color));\n}\n\n:host {\n  --background-focused: currentColor;\n  --background-focused-opacity: .1;\n  --border-radius: 4px;\n  --color: var(--ion-color-primary, #3880ff);\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 32px;\n  font-size: 31px;\n}\n\n:host(.ion-activated) {\n  opacity: 0.4;\n}\n\n\@media (any-hover: hover) {\n  :host(:hover) {\n    opacity: 0.6;\n  }\n}"; }
};

export { MenuButton as ion_menu_button };
