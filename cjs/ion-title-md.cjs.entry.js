'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
const theme = require('./theme-43d6bd40.js');

const ToolbarTitle = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.ionStyle = core.createEvent(this, "ionStyle", 7);
    }
    sizeChanged() {
        this.emitStyle();
    }
    connectedCallback() {
        this.emitStyle();
    }
    emitStyle() {
        const size = this.getSize();
        this.ionStyle.emit({
            [`title-${size}`]: true
        });
    }
    getSize() {
        return (this.size !== undefined) ? this.size : 'default';
    }
    render() {
        const mode = core.getIonMode(this);
        const size = this.getSize();
        return (core.h(core.Host, { class: Object.assign({ [mode]: true, [`title-${size}`]: true }, theme.createColorClasses(this.color)) }, core.h("div", { class: "toolbar-title" }, core.h("slot", null))));
    }
    get el() { return core.getElement(this); }
    static get watchers() { return {
        "size": ["sizeChanged"]
    }; }
    static get style() { return ":host {\n  /**\n   * \@prop --color: Text color of the title\n   */\n  --color: initial;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  color: var(--color);\n}\n\n:host(.ion-color) {\n  color: var(--ion-color-base);\n}\n\n.toolbar-title {\n  display: block;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  pointer-events: auto;\n}\n\n:host(.title-small) .toolbar-title {\n  white-space: normal;\n}\n\n:host {\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 0;\n  padding-bottom: 0;\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 20px;\n    padding-inline-start: 20px;\n    -webkit-padding-end: 20px;\n    padding-inline-end: 20px;\n  }\n}\n\n:host(.title-small) {\n  width: 100%;\n  height: 100%;\n  font-size: 15px;\n  font-weight: normal;\n}"; }
};

exports.ion_title = ToolbarTitle;
