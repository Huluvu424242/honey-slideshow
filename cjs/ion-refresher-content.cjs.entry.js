'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
const index$3 = require('./index-2504963a.js');
const spinnerConfigs = require('./spinner-configs-78228b33.js');

const RefresherContent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        if (this.pullingIcon === undefined) {
            const mode = core.getIonMode(this);
            const overflowRefresher = this.el.style.webkitOverflowScrolling !== undefined ? 'lines' : 'arrow-down';
            this.pullingIcon = core.config.get('refreshingIcon', mode === 'ios' && core.isPlatform('mobile') ? core.config.get('spinner', overflowRefresher) : 'circular');
        }
        if (this.refreshingSpinner === undefined) {
            const mode = core.getIonMode(this);
            this.refreshingSpinner = core.config.get('refreshingSpinner', core.config.get('spinner', mode === 'ios' ? 'lines' : 'circular'));
        }
    }
    render() {
        const pullingIcon = this.pullingIcon;
        const hasSpinner = pullingIcon != null && spinnerConfigs.SPINNERS[pullingIcon] !== undefined;
        const mode = core.getIonMode(this);
        return (core.h(core.Host, { class: mode }, core.h("div", { class: "refresher-pulling" }, this.pullingIcon && hasSpinner &&
            core.h("div", { class: "refresher-pulling-icon" }, core.h("div", { class: "spinner-arrow-container" }, core.h("ion-spinner", { name: this.pullingIcon, paused: true }), mode === 'md' && this.pullingIcon === 'circular' &&
                core.h("div", { class: "arrow-container" }, core.h("ion-icon", { name: "caret-back-sharp" })))), this.pullingIcon && !hasSpinner &&
            core.h("div", { class: "refresher-pulling-icon" }, core.h("ion-icon", { icon: this.pullingIcon, lazy: false })), this.pullingText &&
            core.h("div", { class: "refresher-pulling-text", innerHTML: index$3.sanitizeDOMString(this.pullingText) })), core.h("div", { class: "refresher-refreshing" }, this.refreshingSpinner &&
            core.h("div", { class: "refresher-refreshing-icon" }, core.h("ion-spinner", { name: this.refreshingSpinner })), this.refreshingText &&
            core.h("div", { class: "refresher-refreshing-text", innerHTML: index$3.sanitizeDOMString(this.refreshingText) }))));
    }
    get el() { return core.getElement(this); }
};

exports.ion_refresher_content = RefresherContent;
