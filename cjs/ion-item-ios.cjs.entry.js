'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
const theme = require('./theme-43d6bd40.js');

const Item = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.itemStyles = new Map();
        this.multipleInputs = false;
        /**
         * If `true`, a button tag will be rendered and the item will be tappable.
         */
        this.button = false;
        /**
         * The icon to use when `detail` is set to `true`.
         */
        this.detailIcon = 'chevron-forward';
        /**
         * If `true`, the user cannot interact with the item.
         */
        this.disabled = false;
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
        /**
         * The type of the button. Only used when an `onclick` or `button` property is present.
         */
        this.type = 'button';
    }
    itemStyle(ev) {
        ev.stopPropagation();
        const tagName = ev.target.tagName;
        const updatedStyles = ev.detail;
        const newStyles = {};
        const childStyles = this.itemStyles.get(tagName) || {};
        let hasStyleChange = false;
        Object.keys(updatedStyles).forEach(key => {
            if (updatedStyles[key]) {
                const itemKey = `item-${key}`;
                if (!childStyles[itemKey]) {
                    hasStyleChange = true;
                }
                newStyles[itemKey] = true;
            }
        });
        if (!hasStyleChange && Object.keys(newStyles).length !== Object.keys(childStyles).length) {
            hasStyleChange = true;
        }
        if (hasStyleChange) {
            this.itemStyles.set(tagName, newStyles);
            core.forceUpdate(this);
        }
    }
    componentDidLoad() {
        // The following elements have a clickable cover that is relative to the entire item
        const covers = this.el.querySelectorAll('ion-checkbox, ion-datetime, ion-select, ion-radio');
        // The following elements can accept focus alongside the previous elements
        // therefore if these elements are also a child of item, we don't want the
        // input cover on top of those interfering with their clicks
        const inputs = this.el.querySelectorAll('ion-input, ion-range, ion-searchbar, ion-segment, ion-textarea, ion-toggle');
        // The following elements should also stay clickable when an input with cover is present
        const clickables = this.el.querySelectorAll('ion-anchor, ion-button, a, button');
        // Check for multiple inputs to change the position of the input cover to relative
        // for all of the covered inputs above
        this.multipleInputs = covers.length + inputs.length > 1
            || covers.length + clickables.length > 1
            || covers.length > 0 && this.isClickable();
    }
    // If the item contains an input including a checkbox, datetime, select, or radio
    // then the item will have a clickable input cover that covers the item
    // that should get the hover, focused and activated states UNLESS it has multiple
    // inputs, then those need to individually get each click
    hasCover() {
        const inputs = this.el.querySelectorAll('ion-checkbox, ion-datetime, ion-select, ion-radio');
        return inputs.length === 1 && !this.multipleInputs;
    }
    // If the item has an href or button property it will render a native
    // anchor or button that is clickable
    isClickable() {
        return (this.href !== undefined || this.button);
    }
    canActivate() {
        return (this.isClickable() || this.hasCover());
    }
    render() {
        const { detail, detailIcon, download, lines, disabled, href, rel, target, routerDirection } = this;
        const childStyles = {};
        const mode = core.getIonMode(this);
        const clickable = this.isClickable();
        const canActivate = this.canActivate();
        const TagType = clickable ? (href === undefined ? 'button' : 'a') : 'div';
        const attrs = (TagType === 'button')
            ? { type: this.type }
            : {
                download,
                href,
                rel,
                target
            };
        const showDetail = detail !== undefined ? detail : mode === 'ios' && clickable;
        this.itemStyles.forEach(value => {
            Object.assign(childStyles, value);
        });
        return (core.h(core.Host, { "aria-disabled": disabled ? 'true' : null, class: Object.assign(Object.assign(Object.assign({}, childStyles), theme.createColorClasses(this.color)), { 'item': true, [mode]: true, [`item-lines-${lines}`]: lines !== undefined, 'item-disabled': disabled, 'in-list': theme.hostContext('ion-list', this.el), 'item-multiple-inputs': this.multipleInputs, 'ion-activatable': canActivate, 'ion-focusable': true }) }, core.h(TagType, Object.assign({}, attrs, { class: "item-native", disabled: disabled, onClick: (ev) => theme.openURL(href, ev, routerDirection) }), core.h("slot", { name: "start" }), core.h("div", { class: "item-inner" }, core.h("div", { class: "input-wrapper" }, core.h("slot", null)), core.h("slot", { name: "end" }), showDetail && core.h("ion-icon", { icon: detailIcon, lazy: false, class: "item-detail-icon", part: "detail-icon" }), core.h("div", { class: "item-inner-highlight" })), canActivate && mode === 'md' && core.h("ion-ripple-effect", null)), core.h("div", { class: "item-highlight" })));
    }
    static get delegatesFocus() { return true; }
    get el() { return core.getElement(this); }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the item\n   * \@prop --background-activated: Background of the item when pressed. Note: setting this will interfere with the Material Design ripple.\n   * \@prop --background-activated-opacity: Opacity of the item background when pressed\n   * \@prop --background-focused: Background of the item when focused with the tab key\n   * \@prop --background-focused-opacity: Opacity of the item background when focused with the tab key\n   * \@prop --background-hover: Background of the item on hover\n   * \@prop --background-hover-opacity: Opacity of the background of the item on hover\n   *\n   * \@prop --border-color: Color of the item border\n   * \@prop --border-radius: Radius of the item border\n   * \@prop --border-style: Style of the item border\n   * \@prop --border-width: Width of the item border\n   *\n   * \@prop --color: Color of the item\n   * \@prop --color-activated: Color of the item when pressed\n   * \@prop --color-focused: Color of the item when focused with the tab key\n   * \@prop --color-hover: Color of the item on hover\n   *\n   * \@prop --detail-icon-color: Color of the item detail icon\n   * \@prop --detail-icon-opacity: Opacity of the item detail icon\n   * \@prop --detail-icon-font-size: Font size of the item detail icon\n   *\n   * \@prop --inner-border-width: Width of the item inner border\n   * \@prop --inner-box-shadow: Box shadow of the item inner\n   * \@prop --inner-padding-top: Top padding of the item inner\n   * \@prop --inner-padding-end: Right padding if direction is left-to-right, and left padding if direction is right-to-left of the item inner\n   * \@prop --inner-padding-bottom: Bottom padding of the item inner\n   * \@prop --inner-padding-start: Left padding if direction is left-to-right, and right padding if direction is right-to-left of the item inner\n   *\n   * \@prop --min-height: Minimum height of the item\n   *\n   * \@prop --padding-bottom: Bottom padding of the item\n   * \@prop --padding-end: Right padding if direction is left-to-right, and left padding if direction is right-to-left of the item\n   * \@prop --padding-start: Left padding if direction is left-to-right, and right padding if direction is right-to-left of the item\n   * \@prop --padding-top: Top padding of the item\n   *\n   * \@prop --transition: Transition of the item\n   *\n   * \@prop --ripple-color: Color of the item ripple effect\n   *\n   * \@prop --highlight-height: The height of the highlight on the item\n   * \@prop --highlight-color-focused: The color of the highlight on the item when focused\n   * \@prop --highlight-color-valid: The color of the highlight on the item when valid\n   * \@prop --highlight-color-invalid: The color of the highlight on the item when invalid\n   */\n  --border-radius: 0px;\n  --border-width: 0px;\n  --border-style: solid;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --inner-border-width: 0px;\n  --inner-padding-top: 0px;\n  --inner-padding-bottom: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n  --inner-box-shadow: none;\n  --show-full-highlight: 0;\n  --show-inset-highlight: 0;\n  --detail-icon-color: initial;\n  --detail-icon-font-size: 20px;\n  --detail-icon-opacity: 0.25;\n  --color-activated: var(--color);\n  --color-focused: var(--color);\n  --color-hover: var(--color);\n  --ripple-color: currentColor;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: block;\n  position: relative;\n  outline: none;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  text-align: initial;\n  text-decoration: none;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n:host(.ion-color) .item-native {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast);\n}\n\n:host(.ion-color) .item-native,\n:host(.ion-color) .item-inner {\n  border-color: var(--ion-color-shade);\n}\n\n:host(.ion-activated) .item-native {\n  color: var(--color-activated);\n}\n:host(.ion-activated) .item-native::after {\n  background: var(--background-activated);\n  opacity: var(--background-activated-opacity);\n}\n\n:host(.ion-color.ion-activated) .item-native {\n  color: var(--ion-color-contrast);\n}\n\n:host(.ion-focused) .item-native {\n  color: var(--color-focused);\n}\n:host(.ion-focused) .item-native::after {\n  background: var(--background-focused);\n  opacity: var(--background-focused-opacity);\n}\n\n:host(.ion-color.ion-focused) .item-native {\n  color: var(--ion-color-contrast);\n}\n:host(.ion-color.ion-focused) .item-native::after {\n  background: var(--ion-color-contrast);\n}\n\n\@media (any-hover: hover) {\n  :host(.ion-activatable:hover) .item-native {\n    color: var(--color-hover);\n  }\n  :host(.ion-activatable:hover) .item-native::after {\n    background: var(--background-hover);\n    opacity: var(--background-hover-opacity);\n  }\n\n  :host(.ion-color.ion-activatable:hover) .item-native {\n    color: var(--ion-color-contrast);\n  }\n  :host(.ion-color.ion-activatable:hover) .item-native::after {\n    background: var(--ion-color-contrast);\n  }\n}\n:host(.item-interactive-disabled:not(.item-multiple-inputs)) {\n  cursor: default;\n  pointer-events: none;\n}\n\n:host(.item-disabled) {\n  cursor: default;\n  opacity: 0.3;\n  pointer-events: none;\n}\n\n.item-native {\n  border-radius: var(--border-radius);\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: calc(var(--padding-start) + var(--ion-safe-area-left, 0px));\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-indent: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  min-height: var(--min-height);\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  outline: none;\n  background: var(--background);\n  overflow: inherit;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  z-index: 1;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .item-native {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: calc(var(--padding-start) + var(--ion-safe-area-left, 0px));\n    padding-inline-start: calc(var(--padding-start) + var(--ion-safe-area-left, 0px));\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n\n.item-native::-moz-focus-inner {\n  border: 0;\n}\n\n.item-native::after {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  content: \"\";\n  opacity: 0;\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  z-index: -1;\n}\n\nbutton, a {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-user-drag: none;\n}\n\n.item-inner {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: var(--inner-padding-start);\n  padding-right: calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));\n  padding-top: var(--inner-padding-top);\n  padding-bottom: var(--inner-padding-bottom);\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  min-height: inherit;\n  border-width: var(--inner-border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  -webkit-box-shadow: var(--inner-box-shadow);\n  box-shadow: var(--inner-box-shadow);\n  overflow: inherit;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .item-inner {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--inner-padding-start);\n    padding-inline-start: var(--inner-padding-start);\n    -webkit-padding-end: calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));\n    padding-inline-end: calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));\n  }\n}\n\n.item-detail-icon {\n  color: var(--detail-icon-color);\n  font-size: var(--detail-icon-font-size);\n  opacity: var(--detail-icon-opacity);\n}\n\n::slotted(ion-icon) {\n  font-size: 1.6em;\n}\n\n::slotted(ion-button) {\n  --margin-top: 0;\n  --margin-bottom: 0;\n  --margin-start: 0;\n  --margin-end: 0;\n  z-index: 1;\n}\n\n::slotted(ion-label) {\n  -ms-flex: 1;\n  flex: 1;\n}\n\n:host([vertical-align-top]),\n:host(.item-input) {\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n\n.input-wrapper {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host(.item-label-stacked) .item-native,\n:host(.item-label-floating) .item-native {\n  -ms-flex-align: start;\n  align-items: start;\n}\n\n:host(.item-label-stacked) .input-wrapper,\n:host(.item-label-floating) .input-wrapper {\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\n.item-highlight,\n.item-inner-highlight {\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  background: var(--highlight-background);\n  z-index: 1;\n}\n\n.item-highlight {\n  height: var(--full-highlight-height);\n}\n\n.item-inner-highlight {\n  height: var(--inset-highlight-height);\n}\n\n:host(.item-interactive.item-has-focus),\n:host(.item-interactive.ion-touched.ion-invalid) {\n  --full-highlight-height: calc(var(--highlight-height) * var(--show-full-highlight));\n  --inset-highlight-height: calc(var(--highlight-height) * var(--show-inset-highlight));\n}\n\n:host(.item-interactive.item-has-focus) {\n  --highlight-background: var(--highlight-color-focused);\n}\n\n:host(.item-interactive.ion-valid) {\n  --highlight-background: var(--highlight-color-valid);\n}\n\n:host(.item-interactive.ion-invalid) {\n  --highlight-background: var(--highlight-color-invalid);\n}\n\n:host(.item-label-stacked) ::slotted(ion-select),\n:host(.item-label-floating) ::slotted(ion-select) {\n  --padding-start: 0;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  width: 100%;\n  max-width: 100%;\n}\n\n:host(.item-label-stacked) ::slotted(ion-datetime),\n:host(.item-label-floating) ::slotted(ion-datetime) {\n  --padding-start: 0;\n  width: 100%;\n}\n\n:host(.item-multiple-inputs) ::slotted(ion-checkbox),\n:host(.item-multiple-inputs) ::slotted(ion-datetime),\n:host(.item-multiple-inputs) ::slotted(ion-radio),\n:host(.item-multiple-inputs) ::slotted(ion-select) {\n  position: relative;\n}\n\n:host(.item-textarea) {\n  -ms-flex-align: stretch;\n  align-items: stretch;\n}\n\n::slotted(ion-reorder[slot]) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\nion-ripple-effect {\n  color: var(--ripple-color);\n}\n\n:host {\n  --min-height: 44px;\n  --transition: background-color 200ms linear, opacity 200ms linear;\n  --padding-start: 20px;\n  --inner-padding-end: 10px;\n  --inner-border-width: 0px 0px 0.55px 0px;\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n  --background-activated: #000;\n  --background-focused: #000;\n  --background-hover: currentColor;\n  --background-activated-opacity: .12;\n  --background-focused-opacity: .15;\n  --background-hover-opacity: .04;\n  --border-color: var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));\n  --color: var(--ion-item-color, var(--ion-text-color, #000));\n  --highlight-height: 0;\n  --highlight-color-focused: var(--ion-color-primary, #3880ff);\n  --highlight-color-valid: var(--ion-color-success, #2dd36f);\n  --highlight-color-invalid: var(--ion-color-danger, #eb445a);\n  font-size: 17px;\n}\n\n:host(.ion-activated) {\n  --transition: none;\n}\n\n:host(.ion-color.ion-focused) .item-native::after {\n  background: #000;\n  opacity: 0.15;\n}\n\n:host(.ion-color.ion-activated) .item-native::after {\n  background: #000;\n  opacity: 0.12;\n}\n\n:host(.item-interactive) {\n  --show-full-highlight: 0;\n  --show-inset-highlight: 1;\n}\n\n:host(.item-lines-full) {\n  --border-width: 0px 0px 0.55px 0px;\n  --show-full-highlight: 1;\n  --show-inset-highlight: 0;\n}\n\n:host(.item-lines-inset) {\n  --inner-border-width: 0px 0px 0.55px 0px;\n  --show-full-highlight: 0;\n  --show-inset-highlight: 1;\n}\n\n:host(.item-lines-inset),\n:host(.item-lines-none) {\n  --border-width: 0px;\n  --show-full-highlight: 0;\n}\n\n:host(.item-lines-full),\n:host(.item-lines-none) {\n  --inner-border-width: 0px;\n  --show-inset-highlight: 0;\n}\n\n::slotted([slot=start]) {\n  margin-left: 0;\n  margin-right: 20px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ::slotted([slot=start]) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 0;\n    margin-inline-start: 0;\n    -webkit-margin-end: 20px;\n    margin-inline-end: 20px;\n  }\n}\n\n::slotted([slot=end]) {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ::slotted([slot=end]) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 10px;\n    margin-inline-start: 10px;\n    -webkit-margin-end: 10px;\n    margin-inline-end: 10px;\n  }\n}\n\n::slotted(ion-icon[slot=start]),\n::slotted(ion-icon[slot=end]) {\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n::slotted(ion-toggle[slot=start]),\n::slotted(ion-toggle[slot=end]) {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n:host(.item-label-stacked) ::slotted([slot=end]),\n:host(.item-label-floating) ::slotted([slot=end]) {\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n::slotted(.button-small) {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: .5em;\n  --padding-end: .5em;\n  height: 24px;\n  font-size: 13px;\n}\n\n::slotted(ion-avatar) {\n  width: 36px;\n  height: 36px;\n}\n\n::slotted(ion-thumbnail) {\n  width: 56px;\n  height: 56px;\n}\n\n::slotted(ion-avatar[slot=end]),\n::slotted(ion-thumbnail[slot=end]) {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ::slotted(ion-avatar[slot=end]),\n::slotted(ion-thumbnail[slot=end]) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 10px;\n    margin-inline-start: 10px;\n    -webkit-margin-end: 10px;\n    margin-inline-end: 10px;\n  }\n}\n\n:host(.item-radio) ::slotted(ion-label),\n:host(.item-toggle) ::slotted(ion-label) {\n  margin-left: 0px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.item-radio) ::slotted(ion-label),\n:host(.item-toggle) ::slotted(ion-label) {\n    margin-left: unset;\n    -webkit-margin-start: 0px;\n    margin-inline-start: 0px;\n  }\n}\n\n::slotted(ion-label) {\n  margin-left: 0;\n  margin-right: 8px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  ::slotted(ion-label) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 0;\n    margin-inline-start: 0;\n    -webkit-margin-end: 8px;\n    margin-inline-end: 8px;\n  }\n}\n\n:host(.item-label-floating),\n:host(.item-label-stacked) {\n  --min-height: 68px;\n}\n\n:host(.item-label-stacked) ::slotted(ion-select),\n:host(.item-label-floating) ::slotted(ion-select) {\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --padding-start: 0px;\n}"; }
};

exports.ion_item = Item;
