import { r as registerInstance, e as getIonMode, h, f as config, H as Host, c as getElement, k as isPlatform } from './core-890aed19.js';
var App = /** @class */ (function () {
    function App(hostRef) {
        registerInstance(this, hostRef);
    }
    App.prototype.componentDidLoad = function () {
        {
            rIC(function () {
                var isHybrid = isPlatform(window, 'hybrid');
                if (!config.getBoolean('_testing')) {
                    import('./tap-click-efb9dda5.js').then(function (module) { return module.startTapClick(config); });
                }
                if (config.getBoolean('statusTap', isHybrid)) {
                    import('./status-tap-29121547.js').then(function (module) { return module.startStatusTap(); });
                }
                if (config.getBoolean('inputShims', needInputShims())) {
                    import('./input-shims-6292027f.js').then(function (module) { return module.startInputShims(config); });
                }
                if (config.getBoolean('hardwareBackButton', isHybrid)) {
                    import('./hardware-back-button-7c214102.js').then(function (module) { return module.startHardwareBackButton(); });
                }
                if (typeof window !== 'undefined') {
                    import('./index-c33ca870.js').then(function (module) { return module.startKeyboardAssist(window); });
                }
                import('./focus-visible-1a307222.js').then(function (module) { return module.startFocusVisible(); });
            });
        }
    };
    App.prototype.render = function () {
        var _a;
        var mode = getIonMode(this);
        return (h(Host, { class: (_a = {},
                _a[mode] = true,
                _a['ion-page'] = true,
                _a['force-statusbar-padding'] = config.getBoolean('_forceStatusbarPadding'),
                _a) }));
    };
    Object.defineProperty(App.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "style", {
        get: function () { return "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"; },
        enumerable: true,
        configurable: true
    });
    return App;
}());
var needInputShims = function () {
    return isPlatform(window, 'ios') && isPlatform(window, 'mobile');
};
var rIC = function (callback) {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};
export { App as ion_app };
