'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
const theme = require('./theme-43d6bd40.js');

const Text = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        const mode = core.getIonMode(this);
        return (core.h(core.Host, { class: Object.assign(Object.assign({}, theme.createColorClasses(this.color)), { [mode]: true }) }, core.h("slot", null)));
    }
    static get style() { return ":host(.ion-color) {\n  color: var(--ion-color-base);\n}"; }
};

exports.ion_text = Text;
