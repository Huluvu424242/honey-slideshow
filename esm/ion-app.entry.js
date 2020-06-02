import { r as registerInstance, B as Build, k as isPlatform, d as config, c as getIonMode, h, H as Host, f as getElement } from './core-df18ef15.js';

const App = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        if (Build.isBrowser) {
            rIC(() => {
                const isHybrid = isPlatform(window, 'hybrid');
                if (!config.getBoolean('_testing')) {
                    import('./tap-click-4e0ccdbd.js').then(module => module.startTapClick(config));
                }
                if (config.getBoolean('statusTap', isHybrid)) {
                    import('./status-tap-12f625d0.js').then(module => module.startStatusTap());
                }
                if (config.getBoolean('inputShims', needInputShims())) {
                    import('./input-shims-9e22fb56.js').then(module => module.startInputShims(config));
                }
                if (config.getBoolean('hardwareBackButton', isHybrid)) {
                    import('./hardware-back-button-7c214102.js').then(module => module.startHardwareBackButton());
                }
                if (typeof window !== 'undefined') {
                    import('./index-c33ca870.js').then(module => module.startKeyboardAssist(window));
                }
                import('./focus-visible-1a307222.js').then(module => module.startFocusVisible());
            });
        }
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { class: {
                [mode]: true,
                'ion-page': true,
                'force-statusbar-padding': config.getBoolean('_forceStatusbarPadding')
            } }));
    }
    get el() { return getElement(this); }
    static get style() { return "html.plt-mobile ion-app {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nion-app.force-statusbar-padding {\n  --ion-safe-area-top: 20px;\n}"; }
};
const needInputShims = () => {
    return isPlatform(window, 'ios') && isPlatform(window, 'mobile');
};
const rIC = (callback) => {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};

export { App as ion_app };
