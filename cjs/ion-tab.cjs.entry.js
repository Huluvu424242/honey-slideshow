'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
const frameworkDelegate = require('./framework-delegate-952067d2.js');

const Tab = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.loaded = false;
        /** @internal */
        this.active = false;
    }
    async componentWillLoad() {
        if (core.Build.isDev) {
            if (this.component !== undefined && this.el.childElementCount > 0) {
                console.error('You can not use a lazy-loaded component in a tab and inlined content at the same time.' +
                    `- Remove the component attribute in: <ion-tab component="${this.component}">` +
                    ` or` +
                    `- Remove the embedded content inside the ion-tab: <ion-tab></ion-tab>`);
            }
        }
        if (this.active) {
            await this.setActive();
        }
    }
    /** Set the active component for the tab */
    async setActive() {
        await this.prepareLazyLoaded();
        this.active = true;
    }
    changeActive(isActive) {
        if (isActive) {
            this.prepareLazyLoaded();
        }
    }
    prepareLazyLoaded() {
        if (!this.loaded && this.component != null) {
            this.loaded = true;
            try {
                return frameworkDelegate.attachComponent(this.delegate, this.el, this.component, ['ion-page']);
            }
            catch (e) {
                console.error(e);
            }
        }
        return Promise.resolve(undefined);
    }
    render() {
        const { tab, active, component } = this;
        return (core.h(core.Host, { role: "tabpanel", "aria-hidden": !active ? 'true' : null, "aria-labelledby": `tab-button-${tab}`, class: {
                'ion-page': component === undefined,
                'tab-hidden': !active
            } }, core.h("slot", null)));
    }
    get el() { return core.getElement(this); }
    static get watchers() { return {
        "active": ["changeActive"]
    }; }
    static get style() { return ":host(.tab-hidden) {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}"; }
};

exports.ion_tab = Tab;
