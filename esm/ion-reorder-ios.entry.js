import { r as registerInstance, c as getIonMode, h, H as Host } from './core-df18ef15.js';

const Reorder = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    onClick(ev) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
    }
    render() {
        const mode = getIonMode(this);
        const reorderIcon = mode === 'ios' ? 'reorder-three-outline' : 'reorder-two-sharp';
        return (h(Host, { class: mode }, h("slot", null, h("ion-icon", { name: reorderIcon, lazy: false, class: "reorder-icon", part: "icon" }))));
    }
    static get style() { return ":host([slot]) {\n  display: none;\n  line-height: 0;\n  z-index: 100;\n}\n\n.reorder-icon {\n  display: block;\n  font-size: 22px;\n}\n\n.reorder-icon {\n  font-size: 34px;\n  opacity: 0.4;\n}"; }
};

export { Reorder as ion_reorder };
