'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');

const App = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    componentDidLoad() {
        if (core.Build.isBrowser) {
            rIC(() => {
                const isHybrid = core.isPlatform(window, 'hybrid');
                if (!core.config.getBoolean('_testing')) {
                    new Promise(function (resolve) { resolve(require('./tap-click-51d9fe1d.js')); }).then(module => module.startTapClick(core.config));
                }
                if (core.config.getBoolean('statusTap', isHybrid)) {
                    new Promise(function (resolve) { resolve(require('./status-tap-c7096536.js')); }).then(module => module.startStatusTap());
                }
                if (core.config.getBoolean('inputShims', needInputShims())) {
                    new Promise(function (resolve) { resolve(require('./input-shims-6ccb6937.js')); }).then(module => module.startInputShims(core.config));
                }
                if (core.config.getBoolean('hardwareBackButton', isHybrid)) {
                    new Promise(function (resolve) { resolve(require('./hardware-back-button-886c770d.js')); }).then(module => module.startHardwareBackButton());
                }
                if (typeof window !== 'undefined') {
                    new Promise(function (resolve) { resolve(require('./index-52ce4d88.js')); }).then(module => module.startKeyboardAssist(window));
                }
                new Promise(function (resolve) { resolve(require('./focus-visible-7d83864a.js')); }).then(module => module.startFocusVisible());
            });
        }
    }
    render() {
        const mode = core.getIonMode(this);
        return (core.h(core.Host, { class: {
                [mode]: true,
                'ion-page': true,
                'force-statusbar-padding': core.config.getBoolean('_forceStatusbarPadding')
            } }));
    }
    get el() { return core.getElement(this); }
    static get style() { return "html.plt-mobile ion-app {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nion-app.force-statusbar-padding {\n  --ion-safe-area-top: 20px;\n}"; }
};
const needInputShims = () => {
    return core.isPlatform(window, 'ios') && core.isPlatform(window, 'mobile');
};
const rIC = (callback) => {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};

exports.ion_app = App;
