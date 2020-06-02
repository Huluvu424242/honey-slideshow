'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
const index$1 = require('./index-5995c544.js');

const Backdrop = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.blocker = index$1.GESTURE_CONTROLLER.createBlocker({
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
        this.ionBackdropTap = core.createEvent(this, "ionBackdropTap", 7);
    }
    connectedCallback() {
        if (this.stopPropagation) {
            this.blocker.block();
        }
    }
    disconnectedCallback() {
        this.blocker.unblock();
    }
    onMouseDown(ev) {
        this.emitTap(ev);
    }
    emitTap(ev) {
        if (this.stopPropagation) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        if (this.tappable) {
            this.ionBackdropTap.emit();
        }
    }
    render() {
        const mode = core.getIonMode(this);
        return (core.h(core.Host, { tabindex: "-1", class: {
                [mode]: true,
                'backdrop-hide': !this.visible,
                'backdrop-no-tappable': !this.tappable,
            } }));
    }
    static get style() { return ":host {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: block;\n  position: absolute;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  contain: strict;\n  cursor: pointer;\n  opacity: 0.01;\n  -ms-touch-action: none;\n  touch-action: none;\n  z-index: 2;\n}\n\n:host(.backdrop-hide) {\n  background: transparent;\n}\n\n:host(.backdrop-no-tappable) {\n  cursor: auto;\n}\n\n:host {\n  background-color: var(--ion-backdrop-color, #000);\n}"; }
};

exports.ion_backdrop = Backdrop;
