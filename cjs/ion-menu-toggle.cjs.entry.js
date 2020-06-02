'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
require('./hardware-back-button-886c770d.js');
require('./helpers-31e8d80a.js');
require('./animation-8a037437.js');
const index$4 = require('./index-419c7ea6.js');
const menuToggleUtil = require('./menu-toggle-util-aea545f7.js');

const MenuToggle = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.visible = false;
        /**
         * Automatically hides the content when the corresponding menu is not active.
         *
         * By default, it's `true`. Change it to `false` in order to
         * keep `ion-menu-toggle` always visible regardless the state of the menu.
         */
        this.autoHide = true;
        this.onClick = () => {
            return index$4.menuController.toggle(this.menu);
        };
    }
    connectedCallback() {
        this.visibilityChanged();
    }
    async visibilityChanged() {
        this.visible = await menuToggleUtil.updateVisibility(this.menu);
    }
    render() {
        const mode = core.getIonMode(this);
        const hidden = this.autoHide && !this.visible;
        return (core.h(core.Host, { onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: {
                [mode]: true,
                'menu-toggle-hidden': hidden,
            } }, core.h("slot", null)));
    }
    static get style() { return ":host(.menu-toggle-hidden) {\n  display: none;\n}"; }
};

exports.ion_menu_toggle = MenuToggle;
