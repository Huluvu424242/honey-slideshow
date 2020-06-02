'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');

const Thumbnail = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, { class: core.getIonMode(this) }, core.h("slot", null)));
    }
    static get style() { return ":host {\n  /**\n   * \@prop --border-radius: Border radius of the thumbnail\n   * \@prop --size: Size of the thumbnail\n   */\n  --size: 48px;\n  --border-radius: 0;\n  border-radius: var(--border-radius);\n  display: block;\n  width: var(--size);\n  height: var(--size);\n}\n\n::slotted(ion-img),\n::slotted(img) {\n  border-radius: var(--border-radius);\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n  overflow: hidden;\n}"; }
};

exports.ion_thumbnail = Thumbnail;
