import { r as registerInstance, c as getIonMode, h, H as Host } from './core-df18ef15.js';

const ItemGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { role: "group", class: {
                [mode]: true,
                // Used internally for styling
                [`item-group-${mode}`]: true,
                'item': true
            } }));
    }
    static get style() { return "ion-item-group {\n  display: block;\n}"; }
};

export { ItemGroup as ion_item_group };
