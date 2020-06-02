import { r as registerInstance, i as createEvent, e as getIonMode, h, H as Host, c as getElement } from './core-890aed19.js';
import { h as hasShadowDom } from './helpers-1f46a4a3.js';
import { o as openURL, c as createColorClasses, h as hostContext } from './theme-bda2b980.js';
var Button = /** @class */ (function () {
    function Button(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.inItem = false;
        this.inListHeader = false;
        this.inToolbar = false;
        /**
         * The type of button.
         */
        this.buttonType = 'button';
        /**
         * If `true`, the user cannot interact with the button.
         */
        this.disabled = false;
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
        /**
         * If `true`, activates a button with a heavier font weight.
         */
        this.strong = false;
        /**
         * The type of the button.
         */
        this.type = 'button';
        this.handleClick = function (ev) {
            if (_this.type === 'button') {
                openURL(_this.href, ev, _this.routerDirection);
            }
            else if (hasShadowDom(_this.el)) {
                // this button wants to specifically submit a form
                // climb up the dom to see if we're in a <form>
                // and if so, then use JS to submit it
                var form = _this.el.closest('form');
                if (form) {
                    ev.preventDefault();
                    var fakeButton = document.createElement('button');
                    fakeButton.type = _this.type;
                    fakeButton.style.display = 'none';
                    form.appendChild(fakeButton);
                    fakeButton.click();
                    fakeButton.remove();
                }
            }
        };
        this.onFocus = function () {
            _this.ionFocus.emit();
        };
        this.onBlur = function () {
            _this.ionBlur.emit();
        };
        this.ionFocus = createEvent(this, "ionFocus", 7);
        this.ionBlur = createEvent(this, "ionBlur", 7);
    }
    Button.prototype.componentWillLoad = function () {
        this.inToolbar = !!this.el.closest('ion-buttons');
        this.inListHeader = !!this.el.closest('ion-list-header');
        this.inItem = !!this.el.closest('ion-item') || !!this.el.closest('ion-item-divider');
    };
    Object.defineProperty(Button.prototype, "hasIconOnly", {
        get: function () {
            return !!this.el.querySelector('ion-icon[slot="icon-only"]');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "rippleType", {
        get: function () {
            var hasClearFill = this.fill === undefined || this.fill === 'clear';
            // If the button is in a toolbar, has a clear fill (which is the default)
            // and only has an icon we use the unbounded "circular" ripple effect
            if (hasClearFill && this.hasIconOnly && this.inToolbar) {
                return 'unbounded';
            }
            return 'bounded';
        },
        enumerable: true,
        configurable: true
    });
    Button.prototype.render = function () {
        var _a;
        var mode = getIonMode(this);
        var _b = this, buttonType = _b.buttonType, type = _b.type, disabled = _b.disabled, rel = _b.rel, target = _b.target, size = _b.size, href = _b.href, color = _b.color, expand = _b.expand, hasIconOnly = _b.hasIconOnly, shape = _b.shape, strong = _b.strong;
        var finalSize = size === undefined && this.inItem ? 'small' : size;
        var TagType = href === undefined ? 'button' : 'a';
        var attrs = (TagType === 'button')
            ? { type: type }
            : {
                download: this.download,
                href: href,
                rel: rel,
                target: target
            };
        var fill = this.fill;
        if (fill === undefined) {
            fill = this.inToolbar || this.inListHeader ? 'clear' : 'solid';
        }
        return (h(Host, { onClick: this.handleClick, "aria-disabled": disabled ? 'true' : null, class: Object.assign(Object.assign({}, createColorClasses(color)), (_a = {}, _a[mode] = true, _a[buttonType] = true, _a[buttonType + "-" + expand] = expand !== undefined, _a[buttonType + "-" + finalSize] = finalSize !== undefined, _a[buttonType + "-" + shape] = shape !== undefined, _a[buttonType + "-" + fill] = true, _a[buttonType + "-strong"] = strong, _a['in-toolbar'] = hostContext('ion-toolbar', this.el), _a['in-toolbar-color'] = hostContext('ion-toolbar[color]', this.el), _a['button-has-icon-only'] = hasIconOnly, _a['button-disabled'] = disabled, _a['ion-activatable'] = true, _a['ion-focusable'] = true, _a)) }, h(TagType, Object.assign({}, attrs, { class: "button-native", disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur }), h("span", { class: "button-inner" }, h("slot", { name: "icon-only" }), h("slot", { name: "start" }), h("slot", null), h("slot", { name: "end" })), mode === 'md' && h("ion-ripple-effect", { type: this.rippleType }))));
    };
    Object.defineProperty(Button.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button, "style", {
        get: function () { return ":host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff)}:host(.button-outline){--border-color:var(--ion-color-primary,#3880ff)}:host(.button-clear),:host(.button-outline){--background:transparent;--color:var(--ion-color-primary,#3880ff)}:host(.button-clear){--border-width:0}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native:after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-.3em;margin-right:.3em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-.3em;margin-inline-start:-.3em;-webkit-margin-end:.3em;margin-inline-end:.3em}}::slotted(ion-icon[slot=end]){margin-left:.3em;margin-right:-.2em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:.3em;margin-inline-start:.3em;-webkit-margin-end:-.2em;margin-inline-end:-.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native:after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native:after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native:after{background:var(--background-focused);opacity:var(--background-focused-opacity)}\@media (any-hover:hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native:after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native,:host(.button-outline.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color,var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color,var(--color,var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color,var(--background));color:var(--ion-toolbar-background,var(--color))}:host{--border-radius:10px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--transition:background-color,opacity 100ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:2.8em;font-size:16px;font-weight:500;letter-spacing:-.03em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:var(--ion-color-primary-shade,#3171e0);--background-focused:var(--ion-color-primary-shade,#3171e0);--background-hover:var(--ion-color-primary-tint,#4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:10px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary,#3880ff);--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast,#fff)}:host(.button-clear),:host(.button-outline){--background-focused:var(--ion-color-primary,#3880ff);--background-hover:transparent}:host(.button-clear){--background-activated:transparent;--background-focused-opacity:.1;font-size:17px;font-weight:400;letter-spacing:0}:host(.button-large){--border-radius:12px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:6px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-clear.ion-activated){opacity:.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native:after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native:after{background:var(--ion-color-shade)}:host(.button-clear.ion-focused.ion-color) .button-native,:host(.button-outline.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-focused.ion-color) .button-native:after,:host(.button-outline.ion-focused.ion-color) .button-native:after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native:after{background:var(--ion-color-shade)}\@media (any-hover:hover){:host(.button-clear:hover),:host(.button-outline:hover){opacity:.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native:after,:host(.button-outline.ion-color:hover) .button-native:after{background:transparent}:host(.button-solid.ion-color:hover) .button-native:after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native:after{background:#fff;opacity:.1}}"; },
        enumerable: true,
        configurable: true
    });
    return Button;
}());
export { Button as ion_button };
