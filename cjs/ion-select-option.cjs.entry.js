'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');

const SelectOption = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.inputId = `ion-selopt-${selectOptionIds++}`;
        /**
         * If `true`, the user cannot interact with the select option.
         */
        this.disabled = false;
    }
    render() {
        return (core.h(core.Host, { role: "option", id: this.inputId, class: core.getIonMode(this) }));
    }
    get el() { return core.getElement(this); }
    static get style() { return ":host {\n  display: none;\n}"; }
};
let selectOptionIds = 0;

exports.ion_select_option = SelectOption;
