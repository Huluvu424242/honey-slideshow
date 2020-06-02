'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');

const ItemGroup = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        const mode = core.getIonMode(this);
        return (core.h(core.Host, { role: "group", class: {
                [mode]: true,
                // Used internally for styling
                [`item-group-${mode}`]: true,
                'item': true
            } }));
    }
    static get style() { return "ion-item-group {\n  display: block;\n}"; }
};

exports.ion_item_group = ItemGroup;
