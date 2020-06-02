'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
const theme = require('./theme-43d6bd40.js');
const helpers$1 = require('./helpers-31e8d80a.js');

const Radio = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.inputId = `ion-rb-${radioButtonIds++}`;
        this.radioGroup = null;
        /**
         * If `true`, the radio is selected.
         */
        this.checked = false;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the user cannot interact with the radio.
         */
        this.disabled = false;
        this.updateState = () => {
            if (this.radioGroup) {
                this.checked = this.radioGroup.value === this.value;
            }
        };
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.ionBlur.emit();
        };
        this.ionStyle = core.createEvent(this, "ionStyle", 7);
        this.ionFocus = core.createEvent(this, "ionFocus", 7);
        this.ionBlur = core.createEvent(this, "ionBlur", 7);
    }
    connectedCallback() {
        if (this.value === undefined) {
            this.value = this.inputId;
        }
        const radioGroup = this.radioGroup = this.el.closest('ion-radio-group');
        if (radioGroup) {
            this.updateState();
            radioGroup.addEventListener('ionChange', this.updateState);
        }
    }
    disconnectedCallback() {
        const radioGroup = this.radioGroup;
        if (radioGroup) {
            radioGroup.removeEventListener('ionChange', this.updateState);
            this.radioGroup = null;
        }
    }
    componentWillLoad() {
        this.emitStyle();
    }
    emitStyle() {
        this.ionStyle.emit({
            'radio-checked': this.checked,
            'interactive-disabled': this.disabled,
        });
    }
    render() {
        const { inputId, disabled, checked, color, el } = this;
        const mode = core.getIonMode(this);
        const labelId = inputId + '-lbl';
        const label = helpers$1.findItemLabel(el);
        if (label) {
            label.id = labelId;
        }
        return (core.h(core.Host, { role: "radio", "aria-disabled": disabled ? 'true' : null, "aria-checked": `${checked}`, "aria-labelledby": labelId, class: Object.assign(Object.assign({}, theme.createColorClasses(color)), { [mode]: true, 'in-item': theme.hostContext('ion-item', el), 'interactive': true, 'radio-checked': checked, 'radio-disabled': disabled }) }, core.h("div", { class: "radio-icon", part: "container" }, core.h("div", { class: "radio-inner", part: "mark" })), core.h("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: disabled })));
    }
    get el() { return core.getElement(this); }
    static get watchers() { return {
        "color": ["emitStyle"],
        "checked": ["emitStyle"],
        "disabled": ["emitStyle"]
    }; }
    static get style() { return ":host {\n  /**\n   * \@prop --color: Color of the radio\n   * \@prop --color-checked: Color of the checked radio\n   * \@prop --border-radius: Border radius of the radio\n   * \@prop --inner-border-radius: Border radius of the inner checked radio\n   */\n  --inner-border-radius: 50%;\n  display: inline-block;\n  position: relative;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 2;\n}\n\n:host(.radio-disabled) {\n  pointer-events: none;\n}\n\n.radio-icon {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  contain: layout size style;\n}\n\nbutton {\n  left: 0;\n  top: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n}\n[dir=rtl] button, :host-context([dir=rtl]) button {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\nbutton::-moz-focus-inner {\n  border: 0;\n}\n\n.radio-icon,\n.radio-inner {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host {\n  --color: var(--ion-color-step-400, #999999);\n  --color-checked: var(--ion-color-primary, #3880ff);\n  --border-width: 2px;\n  --border-style: solid;\n  --border-radius: 50%;\n  width: 20px;\n  height: 20px;\n}\n\n:host(.ion-color) .radio-inner {\n  background: var(--ion-color-base);\n}\n\n:host(.ion-color.radio-checked) .radio-icon {\n  border-color: var(--ion-color-base);\n}\n\n.radio-icon {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  border-radius: var(--border-radius);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--color);\n}\n\n.radio-inner {\n  border-radius: var(--inner-border-radius);\n  width: calc(50% + var(--border-width));\n  height: calc(50% + var(--border-width));\n  -webkit-transform: scale3d(0, 0, 0);\n  transform: scale3d(0, 0, 0);\n  -webkit-transition: -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  background: var(--color-checked);\n}\n\n:host(.radio-checked) .radio-icon {\n  border-color: var(--color-checked);\n}\n\n:host(.radio-checked) .radio-inner {\n  -webkit-transform: scale3d(1, 1, 1);\n  transform: scale3d(1, 1, 1);\n}\n\n:host(.radio-disabled) {\n  opacity: 0.3;\n}\n\n:host(.ion-focused) .radio-icon::after {\n  border-radius: var(--inner-border-radius);\n  left: -12px;\n  top: -12px;\n  display: block;\n  position: absolute;\n  width: 36px;\n  height: 36px;\n  background: var(--ion-color-primary-tint, #4c8dff);\n  content: \"\";\n  opacity: 0.2;\n}\n:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after, :host-context([dir=rtl]).ion-focused .radio-icon::after {\n  left: unset;\n  right: unset;\n  right: -12px;\n}\n\n:host(.in-item) {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 9px;\n  margin-bottom: 9px;\n  display: block;\n  position: static;\n}\n\n:host(.in-item[slot=start]) {\n  margin-left: 4px;\n  margin-right: 36px;\n  margin-top: 11px;\n  margin-bottom: 10px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.in-item[slot=start]) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 4px;\n    margin-inline-start: 4px;\n    -webkit-margin-end: 36px;\n    margin-inline-end: 36px;\n  }\n}"; }
};
let radioButtonIds = 0;

exports.ion_radio = Radio;
