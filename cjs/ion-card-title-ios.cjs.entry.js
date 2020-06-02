'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
const theme = require('./theme-43d6bd40.js');

const CardTitle = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        const mode = core.getIonMode(this);
        return (core.h(core.Host, { role: "heading", "aria-level": "2", class: Object.assign(Object.assign({}, theme.createColorClasses(this.color)), { 'ion-inherit-color': true, [mode]: true }) }, core.h("slot", null)));
    }
    static get style() { return ":host {\n  /**\n   * \@prop --color: Color of the card title\n   */\n  display: block;\n  position: relative;\n  color: var(--color);\n}\n\n:host(.ion-color) {\n  color: var(--ion-color-base);\n}\n\n:host {\n  --color: var(--ion-text-color, #000);\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 1.2;\n}"; }
};

exports.ion_card_title = CardTitle;
