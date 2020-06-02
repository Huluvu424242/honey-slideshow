'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');

const SPLIT_PANE_MAIN = 'split-pane-main';
const SPLIT_PANE_SIDE = 'split-pane-side';
const QUERY = {
    'xs': '(min-width: 0px)',
    'sm': '(min-width: 576px)',
    'md': '(min-width: 768px)',
    'lg': '(min-width: 992px)',
    'xl': '(min-width: 1200px)',
    'never': ''
};
const SplitPane = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.visible = false;
        /**
         * If `true`, the split pane will be hidden.
         */
        this.disabled = false;
        /**
         * When the split-pane should be shown.
         * Can be a CSS media query expression, or a shortcut expression.
         * Can also be a boolean expression.
         */
        this.when = QUERY['lg'];
        this.ionSplitPaneVisible = core.createEvent(this, "ionSplitPaneVisible", 7);
    }
    visibleChanged(visible) {
        const detail = { visible, isPane: this.isPane.bind(this) };
        this.ionSplitPaneVisible.emit(detail);
    }
    connectedCallback() {
        this.styleChildren();
        this.updateState();
    }
    disconnectedCallback() {
        if (this.rmL) {
            this.rmL();
            this.rmL = undefined;
        }
    }
    updateState() {
        if (!core.Build.isBrowser) {
            return;
        }
        if (this.rmL) {
            this.rmL();
            this.rmL = undefined;
        }
        // Check if the split-pane is disabled
        if (this.disabled) {
            this.visible = false;
            return;
        }
        // When query is a boolean
        const query = this.when;
        if (typeof query === 'boolean') {
            this.visible = query;
            return;
        }
        // When query is a string, let's find first if it is a shortcut
        const mediaQuery = QUERY[query] || query;
        // Media query is empty or null, we hide it
        if (mediaQuery.length === 0) {
            this.visible = false;
            return;
        }
        if (window.matchMedia) {
            // Listen on media query
            const callback = (q) => {
                this.visible = q.matches;
            };
            const mediaList = window.matchMedia(mediaQuery);
            mediaList.addListener(callback);
            this.rmL = () => mediaList.removeListener(callback);
            this.visible = mediaList.matches;
        }
    }
    isPane(element) {
        if (!this.visible) {
            return false;
        }
        return element.parentElement === this.el
            && element.classList.contains(SPLIT_PANE_SIDE);
    }
    styleChildren() {
        if (!core.Build.isBrowser) {
            return;
        }
        const contentId = this.contentId;
        const children = this.el.children;
        const nu = this.el.childElementCount;
        let foundMain = false;
        for (let i = 0; i < nu; i++) {
            const child = children[i];
            const isMain = contentId !== undefined && child.id === contentId;
            if (isMain) {
                if (foundMain) {
                    console.warn('split pane cannot have more than one main node');
                    return;
                }
                foundMain = true;
            }
            setPaneClass(child, isMain);
        }
        if (!foundMain) {
            console.warn('split pane does not have a specified main node');
        }
    }
    render() {
        const mode = core.getIonMode(this);
        return (core.h(core.Host, { class: {
                [mode]: true,
                // Used internally for styling
                [`split-pane-${mode}`]: true,
                'split-pane-visible': this.visible
            } }, core.h("slot", null)));
    }
    get el() { return core.getElement(this); }
    static get watchers() { return {
        "visible": ["visibleChanged"],
        "disabled": ["updateState"],
        "when": ["updateState"]
    }; }
    static get style() { return ":host {\n  /**\n   * \@prop --border: Border between panes\n   * \@prop --side-min-width: Minimum width of the side pane. Does not apply when split pane is collapsed.\n   * \@prop --side-max-width: Maximum width of the side pane. Does not apply when split pane is collapsed.\n   * \@prop --side-width: Width of the side pane. Does not apply when split pane is collapsed.\n   */\n  --side-width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  contain: strict;\n}\n\n/**\n * Do not pass CSS Variables down on larger \n * screens as we want them to affect the outer\n * `ion-menu` rather than the inner content\n */\n::slotted(ion-menu.menu-pane-visible) {\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  width: var(--side-width);\n  min-width: var(--side-min-width);\n  max-width: var(--side-max-width);\n}\n\n:host(.split-pane-visible) ::slotted(.split-pane-side),\n:host(.split-pane-visible) ::slotted(.split-pane-main) {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: relative;\n  /* stylelint-disable-next-line declaration-no-important */\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n  z-index: 0;\n}\n\n:host(.split-pane-visible) ::slotted(.split-pane-main) {\n  -ms-flex: 1;\n  flex: 1;\n}\n\n:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),\n:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled) {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n}\n\n::slotted(.split-pane-side:not(ion-menu)) {\n  display: none;\n}\n\n:host(.split-pane-visible) ::slotted(.split-pane-side) {\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]) {\n  -ms-flex-order: 1;\n  order: 1;\n}\n\n:host {\n  --border: 1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));\n  --side-min-width: 270px;\n  --side-max-width: 28%;\n}\n\n:host(.split-pane-visible) ::slotted(.split-pane-side) {\n  border-left: 0;\n  border-right: var(--border);\n  border-top: 0;\n  border-bottom: 0;\n  min-width: var(--side-min-width);\n  max-width: var(--side-max-width);\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.split-pane-visible) ::slotted(.split-pane-side) {\n    border-left: unset;\n    border-right: unset;\n    -webkit-border-start: 0;\n    border-inline-start: 0;\n    -webkit-border-end: var(--border);\n    border-inline-end: var(--border);\n  }\n}\n\n:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]) {\n  border-left: var(--border);\n  border-right: 0;\n  border-top: 0;\n  border-bottom: 0;\n  min-width: var(--side-min-width);\n  max-width: var(--side-max-width);\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.split-pane-visible) ::slotted(.split-pane-side[side=end]) {\n    border-left: unset;\n    border-right: unset;\n    -webkit-border-start: var(--border);\n    border-inline-start: var(--border);\n    -webkit-border-end: 0;\n    border-inline-end: 0;\n  }\n}"; }
};
const setPaneClass = (el, isMain) => {
    let toAdd;
    let toRemove;
    if (isMain) {
        toAdd = SPLIT_PANE_MAIN;
        toRemove = SPLIT_PANE_SIDE;
    }
    else {
        toAdd = SPLIT_PANE_SIDE;
        toRemove = SPLIT_PANE_MAIN;
    }
    const classList = el.classList;
    classList.add(toAdd);
    classList.remove(toRemove);
};

exports.ion_split_pane = SplitPane;
