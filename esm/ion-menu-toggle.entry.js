import { r as registerInstance, c as getIonMode, h, H as Host } from './core-df18ef15.js';
import './hardware-back-button-7c214102.js';
import './helpers-c3aa5e98.js';
import './animation-5cbe9b9d.js';
import { m as menuController } from './index-17d6e33a.js';
import { u as updateVisibility } from './menu-toggle-util-d92c18d8.js';

const MenuToggle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.visible = false;
        /**
         * Automatically hides the content when the corresponding menu is not active.
         *
         * By default, it's `true`. Change it to `false` in order to
         * keep `ion-menu-toggle` always visible regardless the state of the menu.
         */
        this.autoHide = true;
        this.onClick = () => {
            return menuController.toggle(this.menu);
        };
    }
    connectedCallback() {
        this.visibilityChanged();
    }
    async visibilityChanged() {
        this.visible = await updateVisibility(this.menu);
    }
    render() {
        const mode = getIonMode(this);
        const hidden = this.autoHide && !this.visible;
        return (h(Host, { onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: {
                [mode]: true,
                'menu-toggle-hidden': hidden,
            } }, h("slot", null)));
    }
    static get style() { return ":host(.menu-toggle-hidden) {\n  display: none;\n}"; }
};

export { MenuToggle as ion_menu_toggle };
