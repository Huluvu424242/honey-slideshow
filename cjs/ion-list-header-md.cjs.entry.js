'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
const theme = require('./theme-43d6bd40.js');

const ListHeader = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        const { lines } = this;
        const mode = core.getIonMode(this);
        return (core.h(core.Host, { class: Object.assign(Object.assign({}, theme.createColorClasses(this.color)), { [mode]: true, [`list-header-lines-${lines}`]: lines !== undefined }) }, core.h("div", { class: "list-header-inner" }, core.h("slot", null))));
    }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the list header\n   * \@prop --color: Color of the list header text\n   *\n   * \@prop --border-color: Color of the list header border\n   * \@prop --border-width: Width of the list header border\n   * \@prop --border-style: Style of the list header border\n   *\n   * \@prop --inner-border-width: Width of the inner list header border\n   */\n  --border-style: solid;\n  --border-width: 0;\n  --inner-border-width: 0;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 40px;\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  background: var(--background);\n  color: var(--color);\n  overflow: hidden;\n}\n\n:host(.ion-color) {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast);\n}\n\n.list-header-inner {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  min-height: inherit;\n  border-width: var(--inner-border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  overflow: inherit;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n::slotted(ion-label) {\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n\n:host(.list-header-lines-inset),\n:host(.list-header-lines-none) {\n  --border-width: 0;\n}\n\n:host(.list-header-lines-full),\n:host(.list-header-lines-none) {\n  --inner-border-width: 0;\n}\n\n:host {\n  --background: transparent;\n  --color: var(--ion-text-color, #000);\n  --border-color: var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));\n  padding-left: calc(var(--ion-safe-area-left, 0) + 16px);\n  min-height: 45px;\n  font-size: 14px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    padding-left: unset;\n    -webkit-padding-start: calc(var(--ion-safe-area-left, 0) + 16px);\n    padding-inline-start: calc(var(--ion-safe-area-left, 0) + 16px);\n  }\n}\n\n:host(.list-header-lines-full) {\n  --border-width: 0 0 1px 0;\n}\n\n:host(.list-header-lines-inset) {\n  --inner-border-width: 0 0 1px 0;\n}"; }
};

exports.ion_list_header = ListHeader;
