'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');

const Reorder = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    onClick(ev) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
    }
    render() {
        const mode = core.getIonMode(this);
        const reorderIcon = mode === 'ios' ? 'reorder-three-outline' : 'reorder-two-sharp';
        return (core.h(core.Host, { class: mode }, core.h("slot", null, core.h("ion-icon", { name: reorderIcon, lazy: false, class: "reorder-icon", part: "icon" }))));
    }
    static get style() { return ":host([slot]) {\n  display: none;\n  line-height: 0;\n  z-index: 100;\n}\n\n.reorder-icon {\n  display: block;\n  font-size: 22px;\n}\n\n.reorder-icon {\n  font-size: 34px;\n  opacity: 0.4;\n}"; }
};

exports.ion_reorder = Reorder;
