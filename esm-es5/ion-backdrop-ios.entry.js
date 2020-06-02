import { r as registerInstance, i as createEvent, e as getIonMode, h, H as Host } from './core-890aed19.js';
import { GESTURE_CONTROLLER } from './index-7e4414a9.js';
var Backdrop = /** @class */ (function () {
    function Backdrop(hostRef) {
        registerInstance(this, hostRef);
        this.blocker = GESTURE_CONTROLLER.createBlocker({
            disableScroll: true
        });
        /**
         * If `true`, the backdrop will be visible.
         */
        this.visible = true;
        /**
         * If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event.
         */
        this.tappable = true;
        /**
         * If `true`, the backdrop will stop propagation on tap.
         */
        this.stopPropagation = true;
        this.ionBackdropTap = createEvent(this, "ionBackdropTap", 7);
    }
    Backdrop.prototype.connectedCallback = function () {
        if (this.stopPropagation) {
            this.blocker.block();
        }
    };
    Backdrop.prototype.disconnectedCallback = function () {
        this.blocker.unblock();
    };
    Backdrop.prototype.onMouseDown = function (ev) {
        this.emitTap(ev);
    };
    Backdrop.prototype.emitTap = function (ev) {
        if (this.stopPropagation) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        if (this.tappable) {
            this.ionBackdropTap.emit();
        }
    };
    Backdrop.prototype.render = function () {
        var _a;
        var mode = getIonMode(this);
        return (h(Host, { tabindex: "-1", class: (_a = {},
                _a[mode] = true,
                _a['backdrop-hide'] = !this.visible,
                _a['backdrop-no-tappable'] = !this.tappable,
                _a) }));
    };
    Object.defineProperty(Backdrop, "style", {
        get: function () { return ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}"; },
        enumerable: true,
        configurable: true
    });
    return Backdrop;
}());
export { Backdrop as ion_backdrop };
