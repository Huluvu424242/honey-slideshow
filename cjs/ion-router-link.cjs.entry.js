'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
const theme = require('./theme-43d6bd40.js');

const RouterLink = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
        this.onClick = (ev) => {
            theme.openURL(this.href, ev, this.routerDirection);
        };
    }
    render() {
        const mode = core.getIonMode(this);
        const attrs = {
            href: this.href,
            rel: this.rel,
            target: this.target
        };
        return (core.h(core.Host, { onClick: this.onClick, class: Object.assign(Object.assign({}, theme.createColorClasses(this.color)), { [mode]: true, 'ion-activatable': true }) }, core.h("a", Object.assign({}, attrs), core.h("slot", null))));
    }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the router link\n   * \@prop --color: Text color of the router link\n   */\n  --background: transparent;\n  --color: var(--ion-color-primary, #3880ff);\n  background: var(--background);\n  color: var(--color);\n}\n\n:host(.ion-color) {\n  color: var(--ion-color-base);\n}\n\na {\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-indent: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n}"; }
};

exports.ion_router_link = RouterLink;
