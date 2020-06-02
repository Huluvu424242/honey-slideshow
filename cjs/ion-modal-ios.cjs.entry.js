'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
const frameworkDelegate = require('./framework-delegate-952067d2.js');
require('./hardware-back-button-886c770d.js');
const overlays = require('./overlays-21fbeaca.js');
const theme = require('./theme-43d6bd40.js');
const index = require('./index-d481847b.js');
const helpers = require('./helpers-31e8d80a.js');
const animation = require('./animation-8a037437.js');
const cubicBezier = require('./cubic-bezier-1afb948c.js');
const index$1 = require('./index-5995c544.js');

// Defaults for the card swipe animation
const SwipeToCloseDefaults = {
    MIN_PRESENTING_SCALE: 0.93,
};
const createSwipeToCloseGesture = (el, animation, onDismiss) => {
    const height = el.offsetHeight;
    let isOpen = false;
    const canStart = (detail) => {
        const target = detail.event.target;
        if (target === null ||
            !target.closest) {
            return true;
        }
        const content = target.closest('ion-content');
        if (content === null) {
            return true;
        }
        // Target is in the content so we don't start the gesture.
        // We could be more nuanced here and allow it for content that
        // does not need to scroll.
        return false;
    };
    const onStart = () => {
        animation.progressStart(true, (isOpen) ? 1 : 0);
    };
    const onMove = (detail) => {
        const step = detail.deltaY / height;
        if (step < 0) {
            return;
        }
        animation.progressStep(step);
    };
    const onEnd = (detail) => {
        const velocity = detail.velocityY;
        const step = detail.deltaY / height;
        if (step < 0) {
            return;
        }
        const threshold = (detail.deltaY + velocity * 1000) / height;
        const shouldComplete = threshold >= 0.5;
        let newStepValue = (shouldComplete) ? -0.001 : 0.001;
        if (!shouldComplete) {
            animation.easing('cubic-bezier(1, 0, 0.68, 0.28)');
            newStepValue += cubicBezier.getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], step)[0];
        }
        else {
            animation.easing('cubic-bezier(0.32, 0.72, 0, 1)');
            newStepValue += cubicBezier.getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], step)[0];
        }
        const duration = (shouldComplete) ? computeDuration(step * height, velocity) : computeDuration((1 - step) * height, velocity);
        isOpen = shouldComplete;
        gesture.enable(false);
        animation
            .onFinish(() => {
            if (!shouldComplete) {
                gesture.enable(true);
            }
        })
            .progressEnd((shouldComplete) ? 1 : 0, newStepValue, duration);
        if (shouldComplete) {
            onDismiss();
        }
    };
    const gesture = index$1.createGesture({
        el,
        gestureName: 'modalSwipeToClose',
        gesturePriority: 40,
        direction: 'y',
        threshold: 10,
        canStart,
        onStart,
        onMove,
        onEnd
    });
    return gesture;
};
const computeDuration = (remaining, velocity) => {
    return helpers.clamp(400, remaining / Math.abs(velocity * 1.1), 500);
};

/**
 * iOS Modal Enter Animation for the Card presentation style
 */
const iosEnterAnimation = (baseEl, presentingEl) => {
    const backdropAnimation = animation.createAnimation()
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
        .beforeStyles({
        'pointer-events': 'none'
    })
        .afterClearStyles(['pointer-events']);
    const wrapperAnimation = animation.createAnimation()
        .addElement(baseEl.querySelectorAll('.modal-wrapper, .modal-shadow'))
        .beforeStyles({ 'opacity': 1 })
        .fromTo('transform', 'translateY(100vh)', 'translateY(0vh)');
    const baseAnimation = animation.createAnimation()
        .addElement(baseEl)
        .easing('cubic-bezier(0.32,0.72,0,1)')
        .duration(500)
        .addAnimation(wrapperAnimation);
    if (presentingEl) {
        const isMobile = window.innerWidth < 768;
        const hasCardModal = (presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined);
        const presentingAnimation = animation.createAnimation()
            .beforeStyles({
            'transform': 'translateY(0)',
            'transform-origin': 'top center',
            'overflow': 'hidden'
        });
        const bodyEl = document.body;
        if (isMobile) {
            /**
             * Fallback for browsers that does not support `max()` (ex: Firefox)
             * No need to worry about statusbar padding since engines like Gecko
             * are not used as the engine for standlone Cordova/Capacitor apps
             */
            const transformOffset = (!CSS.supports('width', 'max(0px, 1px)')) ? '30px' : 'max(30px, var(--ion-safe-area-top))';
            const modalTransform = hasCardModal ? '-10px' : transformOffset;
            const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
            const finalTransform = `translateY(${modalTransform}) scale(${toPresentingScale})`;
            presentingAnimation
                .afterStyles({
                'transform': finalTransform
            })
                .beforeAddWrite(() => bodyEl.style.setProperty('background-color', 'black'))
                .addElement(presentingEl)
                .keyframes([
                { offset: 0, filter: 'contrast(1)', transform: 'translateY(0px) scale(1)', borderRadius: '0px' },
                { offset: 1, filter: 'contrast(0.85)', transform: finalTransform, borderRadius: '10px 10px 0 0' }
            ]);
            baseAnimation.addAnimation(presentingAnimation);
        }
        else {
            baseAnimation.addAnimation(backdropAnimation);
            if (!hasCardModal) {
                wrapperAnimation.fromTo('opacity', '0', '1');
            }
            else {
                const toPresentingScale = (hasCardModal) ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;
                const finalTransform = `translateY(-10px) scale(${toPresentingScale})`;
                presentingAnimation
                    .afterStyles({
                    'transform': finalTransform
                })
                    .addElement(presentingEl.querySelector('.modal-wrapper'))
                    .keyframes([
                    { offset: 0, filter: 'contrast(1)', transform: 'translateY(0) scale(1)' },
                    { offset: 1, filter: 'contrast(0.85)', transform: finalTransform }
                ]);
                const shadowAnimation = animation.createAnimation()
                    .afterStyles({
                    'transform': finalTransform
                })
                    .addElement(presentingEl.querySelector('.modal-shadow'))
                    .keyframes([
                    { offset: 0, opacity: '1', transform: 'translateY(0) scale(1)' },
                    { offset: 1, opacity: '0', transform: finalTransform }
                ]);
                baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
            }
        }
    }
    else {
        baseAnimation.addAnimation(backdropAnimation);
    }
    return baseAnimation;
};

/**
 * iOS Modal Leave Animation
 */
const iosLeaveAnimation = (baseEl, presentingEl, duration = 500) => {
    const backdropAnimation = animation.createAnimation()
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 'var(--backdrop-opacity)', 0.0);
    const wrapperAnimation = animation.createAnimation()
        .addElement(baseEl.querySelectorAll('.modal-wrapper, .modal-shadow'))
        .beforeStyles({ 'opacity': 1 })
        .fromTo('transform', 'translateY(0vh)', 'translateY(100vh)');
    const baseAnimation = animation.createAnimation()
        .addElement(baseEl)
        .easing('cubic-bezier(0.32,0.72,0,1)')
        .duration(duration)
        .addAnimation(wrapperAnimation);
    if (presentingEl) {
        const isMobile = window.innerWidth < 768;
        const hasCardModal = (presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined);
        const presentingAnimation = animation.createAnimation()
            .beforeClearStyles(['transform'])
            .afterClearStyles(['transform'])
            .onFinish(currentStep => {
            // only reset background color if this is the last card-style modal
            if (currentStep !== 1) {
                return;
            }
            presentingEl.style.setProperty('overflow', '');
            const numModals = Array.from(bodyEl.querySelectorAll('ion-modal')).filter(m => m.presentingElement !== undefined).length;
            if (numModals <= 1) {
                bodyEl.style.setProperty('background-color', '');
            }
        });
        const bodyEl = document.body;
        if (isMobile) {
            const transformOffset = (!CSS.supports('width', 'max(0px, 1px)')) ? '30px' : 'max(30px, var(--ion-safe-area-top))';
            const modalTransform = hasCardModal ? '-10px' : transformOffset;
            const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
            const finalTransform = `translateY(${modalTransform}) scale(${toPresentingScale})`;
            presentingAnimation
                .addElement(presentingEl)
                .keyframes([
                { offset: 0, filter: 'contrast(0.85)', transform: finalTransform, borderRadius: '10px 10px 0 0' },
                { offset: 1, filter: 'contrast(1)', transform: 'translateY(0px) scale(1)', borderRadius: '0px' }
            ]);
            baseAnimation.addAnimation(presentingAnimation);
        }
        else {
            baseAnimation.addAnimation(backdropAnimation);
            if (!hasCardModal) {
                wrapperAnimation.fromTo('opacity', '1', '0');
            }
            else {
                const toPresentingScale = (hasCardModal) ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;
                const finalTransform = `translateY(-10px) scale(${toPresentingScale})`;
                presentingAnimation
                    .addElement(presentingEl.querySelector('.modal-wrapper'))
                    .afterStyles({
                    'transform': 'translate3d(0, 0, 0)'
                })
                    .keyframes([
                    { offset: 0, filter: 'contrast(0.85)', transform: finalTransform },
                    { offset: 1, filter: 'contrast(1)', transform: 'translateY(0) scale(1)' }
                ]);
                const shadowAnimation = animation.createAnimation()
                    .addElement(presentingEl.querySelector('.modal-shadow'))
                    .afterStyles({
                    'transform': 'translateY(0) scale(1)'
                })
                    .keyframes([
                    { offset: 0, opacity: '0', transform: finalTransform },
                    { offset: 1, opacity: '1', transform: 'translateY(0) scale(1)' }
                ]);
                baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
            }
        }
    }
    else {
        baseAnimation.addAnimation(backdropAnimation);
    }
    return baseAnimation;
};

/**
 * Md Modal Enter Animation
 */
const mdEnterAnimation = (baseEl) => {
    const baseAnimation = animation.createAnimation();
    const backdropAnimation = animation.createAnimation();
    const wrapperAnimation = animation.createAnimation();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
        .beforeStyles({
        'pointer-events': 'none'
    })
        .afterClearStyles(['pointer-events']);
    wrapperAnimation
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.01, transform: 'translateY(40px)' },
        { offset: 1, opacity: 1, transform: 'translateY(0px)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(280)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Md Modal Leave Animation
 */
const mdLeaveAnimation = (baseEl) => {
    const baseAnimation = animation.createAnimation();
    const backdropAnimation = animation.createAnimation();
    const wrapperAnimation = animation.createAnimation();
    const wrapperEl = baseEl.querySelector('.modal-wrapper');
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 'var(--backdrop-opacity)', 0.0);
    wrapperAnimation
        .addElement(wrapperEl)
        .keyframes([
        { offset: 0, opacity: 0.99, transform: 'translateY(0px)' },
        { offset: 1, opacity: 0, transform: 'translateY(40px)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.47,0,0.745,0.715)')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

const Modal = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        // Whether or not modal is being dismissed via gesture
        this.gestureAnimationDismissing = false;
        this.presented = false;
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * If `true`, the modal will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = true;
        /**
         * If `true`, a backdrop will be displayed behind the modal.
         */
        this.showBackdrop = true;
        /**
         * If `true`, the modal will animate.
         */
        this.animated = true;
        /**
         * If `true`, the modal can be swiped to dismiss. Only applies in iOS mode.
         */
        this.swipeToClose = false;
        this.onBackdropTap = () => {
            this.dismiss(undefined, overlays.BACKDROP);
        };
        this.onDismiss = (ev) => {
            ev.stopPropagation();
            ev.preventDefault();
            this.dismiss();
        };
        this.onLifecycle = (modalEvent) => {
            const el = this.usersElement;
            const name = LIFECYCLE_MAP[modalEvent.type];
            if (el && name) {
                const ev = new CustomEvent(name, {
                    bubbles: false,
                    cancelable: false,
                    detail: modalEvent.detail
                });
                el.dispatchEvent(ev);
            }
        };
        overlays.prepareOverlay(this.el);
        this.didPresent = core.createEvent(this, "ionModalDidPresent", 7);
        this.willPresent = core.createEvent(this, "ionModalWillPresent", 7);
        this.willDismiss = core.createEvent(this, "ionModalWillDismiss", 7);
        this.didDismiss = core.createEvent(this, "ionModalDidDismiss", 7);
    }
    swipeToCloseChanged(enable) {
        if (this.gesture) {
            this.gesture.enable(enable);
        }
        else if (enable) {
            this.initSwipeToClose();
        }
    }
    /**
     * Present the modal overlay after it has been created.
     */
    async present() {
        if (this.presented) {
            return;
        }
        const container = this.el.querySelector(`.modal-wrapper`);
        if (!container) {
            throw new Error('container is undefined');
        }
        const componentProps = Object.assign(Object.assign({}, this.componentProps), { modal: this.el });
        this.usersElement = await frameworkDelegate.attachComponent(this.delegate, container, this.component, ['ion-page'], componentProps);
        await index.deepReady(this.usersElement);
        core.writeTask(() => this.el.classList.add('show-modal'));
        await overlays.present(this, 'modalEnter', iosEnterAnimation, mdEnterAnimation, this.presentingElement);
        if (this.swipeToClose) {
            this.initSwipeToClose();
        }
    }
    initSwipeToClose() {
        if (core.getIonMode(this) !== 'ios') {
            return;
        }
        // All of the elements needed for the swipe gesture
        // should be in the DOM and referenced by now, except
        // for the presenting el
        const animationBuilder = this.leaveAnimation || core.config.get('modalLeave', iosLeaveAnimation);
        const ani = this.animation = animationBuilder(this.el, this.presentingElement);
        this.gesture = createSwipeToCloseGesture(this.el, ani, () => {
            /**
             * While the gesture animation is finishing
             * it is possible for a user to tap the backdrop.
             * This would result in the dismiss animation
             * being played again. Typically this is avoided
             * by setting `presented = false` on the overlay
             * component; however, we cannot do that here as
             * that would prevent the element from being
             * removed from the DOM.
             */
            this.gestureAnimationDismissing = true;
            this.animation.onFinish(async () => {
                await this.dismiss(undefined, 'gesture');
                this.gestureAnimationDismissing = false;
            });
        });
        this.gesture.enable(true);
    }
    /**
     * Dismiss the modal overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
     */
    async dismiss(data, role) {
        if (this.gestureAnimationDismissing && role !== 'gesture') {
            return false;
        }
        const enteringAnimation = overlays.activeAnimations.get(this) || [];
        const dismissed = await overlays.dismiss(this, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation, this.presentingElement);
        if (dismissed) {
            await frameworkDelegate.detachComponent(this.delegate, this.usersElement);
            if (this.animation) {
                this.animation.destroy();
            }
            enteringAnimation.forEach(ani => ani.destroy());
        }
        this.animation = undefined;
        return dismissed;
    }
    /**
     * Returns a promise that resolves when the modal did dismiss.
     */
    onDidDismiss() {
        return overlays.eventMethod(this.el, 'ionModalDidDismiss');
    }
    /**
     * Returns a promise that resolves when the modal will dismiss.
     */
    onWillDismiss() {
        return overlays.eventMethod(this.el, 'ionModalWillDismiss');
    }
    render() {
        const mode = core.getIonMode(this);
        return (core.h(core.Host, { "no-router": true, "aria-modal": "true", tabindex: "-1", class: Object.assign({ [mode]: true, [`modal-card`]: this.presentingElement !== undefined && mode === 'ios' }, theme.getClassMap(this.cssClass)), style: {
                zIndex: `${20000 + this.overlayIndex}`,
            }, onIonBackdropTap: this.onBackdropTap, onIonDismiss: this.onDismiss, onIonModalDidPresent: this.onLifecycle, onIonModalWillPresent: this.onLifecycle, onIonModalWillDismiss: this.onLifecycle, onIonModalDidDismiss: this.onLifecycle }, core.h("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }), mode === 'ios' && core.h("div", { class: "modal-shadow" }), core.h("div", { role: "dialog", class: "modal-wrapper" })));
    }
    get el() { return core.getElement(this); }
    static get watchers() { return {
        "swipeToClose": ["swipeToCloseChanged"]
    }; }
    static get style() { return ".sc-ion-modal-ios-h {\n  \n  --width: 100%;\n  --min-width: auto;\n  --max-width: auto;\n  --height: 100%;\n  --min-height: auto;\n  --max-height: auto;\n  --overflow: hidden;\n  --border-radius: 0;\n  --border-width: 0;\n  --border-style: none;\n  --border-color: transparent;\n  --background: var(--ion-background-color, #fff);\n  --box-shadow: none;\n  --backdrop-opacity: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  outline: none;\n  contain: strict;\n}\n\n.overlay-hidden.sc-ion-modal-ios-h {\n  display: none;\n}\n\n.modal-wrapper.sc-ion-modal-ios, .modal-shadow.sc-ion-modal-ios {\n  border-radius: var(--border-radius);\n  width: var(--width);\n  min-width: var(--min-width);\n  max-width: var(--max-width);\n  height: var(--height);\n  min-height: var(--min-height);\n  max-height: var(--max-height);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  background: var(--background);\n  -webkit-box-shadow: var(--box-shadow);\n  box-shadow: var(--box-shadow);\n  overflow: var(--overflow);\n  z-index: 10;\n}\n\n.modal-shadow.sc-ion-modal-ios {\n  position: absolute;\n  background: transparent;\n}\n\n\@media only screen and (min-width: 768px) and (min-height: 600px) {\n  .sc-ion-modal-ios-h {\n    --width: 600px;\n    --height: 500px;\n    --ion-safe-area-top: 0px;\n    --ion-safe-area-bottom: 0px;\n    --ion-safe-area-right: 0px;\n    --ion-safe-area-left: 0px;\n  }\n}\n\@media only screen and (min-width: 768px) and (min-height: 768px) {\n  .sc-ion-modal-ios-h {\n    --width: 600px;\n    --height: 600px;\n  }\n}\n.sc-ion-modal-ios-h:first-of-type {\n  --backdrop-opacity: var(--ion-backdrop-opacity, 0.4);\n}\n\n\@media only screen and (min-width: 768px) and (min-height: 600px) {\n  .sc-ion-modal-ios-h {\n    --border-radius: 10px;\n  }\n}\n.modal-wrapper.sc-ion-modal-ios {\n  -webkit-transform: translate3d(0,  100%,  0);\n  transform: translate3d(0,  100%,  0);\n}\n\n\@media screen and (max-width: 767px) {\n  \@supports (width: max(0px, 1px)) {\n    .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios {\n      height: calc(100% - max(30px, var(--ion-safe-area-top)) - 10px);\n    }\n  }\n  \@supports not (width: max(0px, 1px)) {\n    .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios {\n      height: calc(100% - 40px);\n    }\n  }\n  .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios {\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  [dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios {\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n\n  .modal-card.sc-ion-modal-ios-h {\n    --backdrop-opacity: 0;\n    --width: 100%;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios {\n    display: none;\n  }\n\n  .modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios {\n    pointer-events: none;\n  }\n}\n\@media screen and (min-width: 768px) {\n  .modal-card.sc-ion-modal-ios-h {\n    --width: calc(100% - 120px);\n    --height: calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));\n    --max-width: 720px;\n    --max-height: 1000px;\n  }\n\n  .modal-card.sc-ion-modal-ios-h {\n    --backdrop-opacity: 0;\n    -webkit-transition: all 0.5s ease-in-out;\n    transition: all 0.5s ease-in-out;\n  }\n  .modal-card.sc-ion-modal-ios-h:first-of-type {\n    --backdrop-opacity: 0.18;\n  }\n\n  .modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios {\n    -webkit-box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.1);\n    box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.1);\n  }\n}"; }
};
const LIFECYCLE_MAP = {
    'ionModalDidPresent': 'ionViewDidEnter',
    'ionModalWillPresent': 'ionViewWillEnter',
    'ionModalWillDismiss': 'ionViewWillLeave',
    'ionModalDidDismiss': 'ionViewDidLeave',
};

exports.ion_modal = Modal;
