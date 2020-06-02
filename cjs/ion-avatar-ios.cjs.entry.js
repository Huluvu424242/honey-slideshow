'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');

const Avatar = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, { class: core.getIonMode(this) }, core.h("slot", null)));
    }
    static get style() { return ":host {\n  /**\n   * \@prop --border-radius: Border radius of the avatar and inner image\n   */\n  border-radius: var(--border-radius);\n  display: block;\n}\n\n::slotted(ion-img),\n::slotted(img) {\n  border-radius: var(--border-radius);\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n  overflow: hidden;\n}\n\n:host {\n  --border-radius: 50%;\n  width: 48px;\n  height: 48px;\n}"; }
};

exports.ion_avatar = Avatar;
