'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
require('./hardware-back-button-886c770d.js');
const overlays = require('./overlays-21fbeaca.js');

const SelectPopover = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /** Array of options for the popover */
        this.options = [];
    }
    onSelect(ev) {
        const option = this.options.find(o => o.value === ev.target.value);
        if (option) {
            overlays.safeCall(option.handler);
        }
    }
    render() {
        const checkedOption = this.options.find(o => o.checked);
        const checkedValue = checkedOption ? checkedOption.value : undefined;
        return (core.h(core.Host, { class: core.getIonMode(this) }, core.h("ion-list", null, this.header !== undefined && core.h("ion-list-header", null, this.header), (this.subHeader !== undefined || this.message !== undefined) &&
            core.h("ion-item", null, core.h("ion-label", { class: "ion-text-wrap" }, this.subHeader !== undefined && core.h("h3", null, this.subHeader), this.message !== undefined && core.h("p", null, this.message))), core.h("ion-radio-group", { value: checkedValue }, this.options.map(option => core.h("ion-item", null, core.h("ion-label", null, option.text), core.h("ion-radio", { value: option.value, disabled: option.disabled })))))));
    }
    static get style() { return ".sc-ion-select-popover-h ion-list.sc-ion-select-popover {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: -1px;\n  margin-bottom: -1px;\n}\n\n.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover, .sc-ion-select-popover-h ion-label.sc-ion-select-popover {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}"; }
};

exports.ion_select_popover = SelectPopover;
