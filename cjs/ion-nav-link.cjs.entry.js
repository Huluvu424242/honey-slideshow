'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');

const navLink = (el, routerDirection, component, componentProps) => {
    const nav = el.closest('ion-nav');
    if (nav) {
        if (routerDirection === 'forward') {
            if (component !== undefined) {
                return nav.push(component, componentProps, { skipIfBusy: true });
            }
        }
        else if (routerDirection === 'root') {
            if (component !== undefined) {
                return nav.setRoot(component, componentProps, { skipIfBusy: true });
            }
        }
        else if (routerDirection === 'back') {
            return nav.pop({ skipIfBusy: true });
        }
    }
    return Promise.resolve(false);
};

const NavLink = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * The transition direction when navigating to another page.
         */
        this.routerDirection = 'forward';
        this.onClick = () => {
            return navLink(this.el, this.routerDirection, this.component, this.componentProps);
        };
    }
    render() {
        return (core.h(core.Host, { onClick: this.onClick }));
    }
    get el() { return core.getElement(this); }
};

exports.ion_nav_link = NavLink;
