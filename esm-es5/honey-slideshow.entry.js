var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { r as registerInstance, h, c as getElement } from './core-890aed19.js';
import './utils-1a88d64b.js';
import './helpers-1f46a4a3.js';
import './animation-31a0594a.js';
import './index-f7e0aa7a.js';
import './ios.transition-41d8114c.js';
import './md.transition-c882ae6a.js';
import './cubic-bezier-982e7b87.js';
import './index-7e4414a9.js';
import { I as IonicSafeString } from './index-7dea1151.js';
import './hardware-back-button-7c214102.js';
import './index-8e3b7270.js';
import './overlays-87f196b6.js';
var IMG_START = '<svg version="1.1" viewBox="0.0 0.0 960.0 720.0" fill="none" stroke="none" stroke-linecap="square"\n' +
    '     stroke-miterlimit="10" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n' +
    '  <clipPath id="p.0">\n' +
    '    <path d="m0 0l960.0 0l0 720.0l-960.0 0l0 -720.0z" clip-rule="nonzero"/>\n' +
    '  </clipPath>\n' +
    '  <g clip-path="url(#p.0)">\n' +
    '    <path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 720.0l-960.0 0z" fill-rule="evenodd"/>\n' +
    '    <path fill="#000000"\n' +
    '          d="m954.5431 670.8872l-812.8905 -308.69644l818.3474 -304.63376l-5.456909 89.36221l-561.92786 215.27156l567.38477 219.33426z"\n' +
    '          fill-rule="evenodd"/>\n' +
    '    <path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt"\n' +
    '          d="m954.5431 670.8872l-812.8905 -308.69644l818.3474 -304.63376l-5.456909 89.36221l-561.92786 215.27156l567.38477 219.33426z"\n' +
    '          fill-rule="evenodd"/>\n' +
    '    <path fill="#000000" d="m141.67947 720.0l-141.6693 0l0 -720.0l141.6693 0z" fill-rule="evenodd"/>\n' +
    '    <path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt"\n' +
    '          d="m141.67947 720.0l-141.6693 0l0 -720.0l141.6693 0z" fill-rule="evenodd"/>\n' +
    '  </g>\n' +
    '</svg>';
var IMG_FASTREWIND = '<svg version="1.1" viewBox="0.0 0.0 960.0 720.0" fill="none" stroke="none" stroke-linecap="square"\n' +
    '     stroke-miterlimit="10" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n' +
    '  <clipPath id="p.0">\n' +
    '    <path d="m0 0l960.0 0l0 720.0l-960.0 0l0 -720.0z" clip-rule="nonzero"/>\n' +
    '  </clipPath>\n' +
    '  <g clip-path="url(#p.0)">\n' +
    '    <path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 720.0l-960.0 0z" fill-rule="evenodd"/>\n' +
    '    <path fill="#000000"\n' +
    '          d="m956.60803 718.49603l-573.71375 -362.3846l577.56506 -357.61536l-3.8512573 104.90401l-396.59186 252.71136l400.4431 257.48062z"\n' +
    '          fill-rule="evenodd"/>\n' +
    '    <path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt"\n' +
    '          d="m956.60803 718.49603l-573.71375 -362.3846l577.56506 -357.61536l-3.8512573 104.90401l-396.59186 252.71136l400.4431 257.48062z"\n' +
    '          fill-rule="evenodd"/>\n' +
    '    <path fill="#000000"\n' +
    '          d="m574.16724 718.49603l-573.71375 -362.3846l577.56506 -357.61536l-3.8513184 104.90401l-396.59186 252.71136l400.44318 257.48062z"\n' +
    '          fill-rule="evenodd"/>\n' +
    '    <path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt"\n' +
    '          d="m574.16724 718.49603l-573.71375 -362.3846l577.56506 -357.61536l-3.8513184 104.90401l-396.59186 252.71136l400.44318 257.48062z"\n' +
    '          fill-rule="evenodd"/>\n' +
    '  </g>\n' +
    '</svg>';
var IMG_REWIND = '<svg version="1.1" viewBox="0.0 0.0 960.0 720.0" fill="none" stroke="none" stroke-linecap="square"\n' +
    '     stroke-miterlimit="10" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n' +
    '  <clipPath id="p.0">\n' +
    '    <path d="m0 0l960.0 0l0 720.0l-960.0 0l0 -720.0z" clip-rule="nonzero"/>\n' +
    '  </clipPath>\n' +
    '  <g clip-path="url(#p.0)">\n' +
    '    <path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 720.0l-960.0 0z" fill-rule="evenodd"/>\n' +
    '    <path fill="#000000"\n' +
    '          d="m951.5988 722.2808l-951.6064 -364.2935l957.99445 -359.49908l-6.3880615 105.45658l-657.81824 254.04251l664.2063 258.83694z"\n' +
    '          fill-rule="evenodd"/>\n' +
    '    <path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt"\n' +
    '          d="m951.5988 722.2808l-951.6064 -364.2935l957.99445 -359.49908l-6.3880615 105.45658l-657.81824 254.04251l664.2063 258.83694z"\n' +
    '          fill-rule="evenodd"/>\n' +
    '  </g>\n' +
    '</svg>';
var IMG_PLAY = '<svg version="1.1" viewBox="0.0 0.0 960.0 720.0" fill="none" stroke="none" stroke-linecap="square"\n' +
    '     stroke-miterlimit="10" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n' +
    '  <clipPath id="p.0">\n' +
    '    <path d="m0 0l960.0 0l0 720.0l-960.0 0l0 -720.0z" clip-rule="nonzero"/>\n' +
    '  </clipPath>\n' +
    '  <g clip-path="url(#p.0)">\n' +
    '    <path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 720.0l-960.0 0z" fill-rule="evenodd"/>\n' +
    '    <path fill="#000000" d="m-0.007874016 0l958.3937 360.86615l-958.3937 360.86615z" fill-rule="evenodd"/>\n' +
    '    <path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt"\n' +
    '          d="m-0.007874016 0l958.3937 360.86615l-958.3937 360.86615z" fill-rule="evenodd"/>\n' +
    '  </g>\n' +
    '</svg>';
var IMG_PAUSE = '<svg version="1.1" viewBox="0.0 0.0 960.0 720.0" fill="none" stroke="none" stroke-linecap="square"\n' +
    '     stroke-miterlimit="10" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n' +
    '  <clipPath id="p.0">\n' +
    '    <path d="m0 0l960.0 0l0 720.0l-960.0 0l0 -720.0z" clip-rule="nonzero"/>\n' +
    '  </clipPath>\n' +
    '  <g clip-path="url(#p.0)">\n' +
    '    <path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 720.0l-960.0 0z" fill-rule="evenodd"/>\n' +
    '    <path fill="#000000" d="m198.31253 1.2073491l192.50394 0l0 720.0l-192.50394 0z" fill-rule="evenodd"/>\n' +
    '    <path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt"\n' +
    '          d="m198.31253 1.2073491l192.50394 0l0 720.0l-192.50394 0z" fill-rule="evenodd"/>\n' +
    '    <path fill="#000000" d="m550.7434 1.2073491l192.50397 0l0 720.0l-192.50397 0z" fill-rule="evenodd"/>\n' +
    '    <path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt"\n' +
    '          d="m550.7434 1.2073491l192.50397 0l0 720.0l-192.50397 0z" fill-rule="evenodd"/>\n' +
    '  </g>\n' +
    '</svg>';
var IMG_FOREWARD = '<svg version="1.1" viewBox="0.0 0.0 960.0 720.0" fill="none" stroke="none" stroke-linecap="square"\n' +
    '     stroke-miterlimit="10" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n' +
    '  <clipPath id="p.0">\n' +
    '    <path d="m0 0l960.0 0l0 720.0l-960.0 0l0 -720.0z" clip-rule="nonzero"/>\n' +
    '  </clipPath>\n' +
    '  <g clip-path="url(#p.0)">\n' +
    '    <path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 720.0l-960.0 0z" fill-rule="evenodd"/>\n' +
    '    <path fill="#000000"\n' +
    '          d="m6.4014697 -1.503937l953.6023 362.38464l-960.0038 357.6154l6.4014697 -104.90405l659.1979 -252.71133l-665.59937 -257.48065z"\n' +
    '          fill-rule="evenodd"/>\n' +
    '    <path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt"\n' +
    '          d="m6.4014697 -1.503937l953.6023 362.38464l-960.0038 357.6154l6.4014697 -104.90405l659.1979 -252.71133l-665.59937 -257.48065z"\n' +
    '          fill-rule="evenodd"/>\n' +
    '  </g>\n' +
    '</svg>';
var IMG_FASTFOREWARD = '<svg version="1.1" viewBox="0.0 0.0 960.0 720.0" fill="none" stroke="none" stroke-linecap="square"\n' +
    '     stroke-miterlimit="10" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n' +
    '  <clipPath id="p.0">\n' +
    '    <path d="m0 0l960.0 0l0 720.0l-960.0 0l0 -720.0z" clip-rule="nonzero"/>\n' +
    '  </clipPath>\n' +
    '  <g clip-path="url(#p.0)">\n' +
    '    <path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 720.0l-960.0 0z" fill-rule="evenodd"/>\n' +
    '    <path fill="#000000"\n' +
    '          d="m3.8513029 -1.503937l573.71375 362.38464l-577.56506 357.6154l3.8513029 -104.90405l396.59186 -252.71133l-400.44315 -257.48065z"\n' +
    '          fill-rule="evenodd"/>\n' +
    '    <path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt"\n' +
    '          d="m3.8513029 -1.503937l573.71375 362.38464l-577.56506 357.6154l3.8513029 -104.90405l396.59186 -252.71133l-400.44315 -257.48065z"\n' +
    '          fill-rule="evenodd"/>\n' +
    '    <path fill="#000000"\n' +
    '          d="m386.29053 -1.503937l573.71375 362.38464l-577.56506 357.6154l3.8512878 -104.90405l396.59186 -252.71133l-400.44315 -257.48065z"\n' +
    '          fill-rule="evenodd"/>\n' +
    '    <path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt"\n' +
    '          d="m386.29053 -1.503937l573.71375 362.38464l-577.56506 357.6154l3.8512878 -104.90405l396.59186 -252.71133l-400.44315 -257.48065z"\n' +
    '          fill-rule="evenodd"/>\n' +
    '  </g>\n' +
    '</svg>';
var IMG_END = '<svg version="1.1" viewBox="0.0 0.0 960.0 720.0" fill="none" stroke="none" stroke-linecap="square"\n' +
    '     stroke-miterlimit="10" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n' +
    '  <clipPath id="p.0">\n' +
    '    <path d="m0 0l960.0 0l0 720.0l-960.0 0l0 -720.0z" clip-rule="nonzero"/>\n' +
    '  </clipPath>\n' +
    '  <g clip-path="url(#p.0)">\n' +
    '    <path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 720.0l-960.0 0z" fill-rule="evenodd"/>\n' +
    '    <path fill="#000000"\n' +
    '          d="m5.486655 49.11279l817.3259 308.69644l-822.81256 304.63376l5.486655 -89.36218l564.99396 -215.27158l-570.4806 -219.33423z"\n' +
    '          fill-rule="evenodd"/>\n' +
    '    <path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt"\n' +
    '          d="m5.486655 49.11279l817.3259 308.69644l-822.81256 304.63376l5.486655 -89.36218l564.99396 -215.27158l-570.4806 -219.33423z"\n' +
    '          fill-rule="evenodd"/>\n' +
    '    <path fill="#000000" d="m822.78174 0l142.45667 0l0 720.0l-142.45667 0z" fill-rule="evenodd"/>\n' +
    '    <path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt"\n' +
    '          d="m822.78174 0l142.45667 0l0 720.0l-142.45667 0z" fill-rule="evenodd"/>\n' +
    '  </g>\n' +
    '</svg>\n';
var IMG_STOP = '<svg version="1.1" viewBox="0.0 0.0 960.0 720.0" fill="none" stroke="none" stroke-linecap="square"\n' +
    '     stroke-miterlimit="10" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">\n' +
    '  <clipPath id="p.0">\n' +
    '    <path d="m0 0l960.0 0l0 720.0l-960.0 0l0 -720.0z" clip-rule="nonzero"/>\n' +
    '  </clipPath>\n' +
    '  <g clip-path="url(#p.0)">\n' +
    '    <path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 720.0l-960.0 0z" fill-rule="evenodd"/>\n' +
    '    <path fill="#000000" d="m198.312 1.2073491l544.9449 0l0 720.0l-544.9449 0z" fill-rule="evenodd"/>\n' +
    '    <path stroke="#000000" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt"\n' +
    '          d="m198.312 1.2073491l544.9449 0l0 720.0l-544.9449 0z" fill-rule="evenodd"/>\n' +
    '  </g>\n' +
    '</svg>';
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.logMessage = function (message) {
        console.log(message);
    };
    Logger.debugMessage = function (message) {
        console.debug(message);
    };
    Logger.errorMessage = function (message) {
        console.error(message);
    };
    Logger.infoMessage = function (message) {
        console.info(message);
    };
    return Logger;
}());
var Sprachausgabe = /** @class */ (function () {
    function Sprachausgabe(sprachSynthese, sprachauswahl, vorleserCallbacks) {
        this.sprachSynthese = sprachSynthese;
        this.sprachauswahl = sprachauswahl;
        this.vorleserCallbacks = vorleserCallbacks;
        Logger.infoMessage("####constructor finished");
    }
    Sprachausgabe.prototype.erzeugeVorleser = function (text) {
        var _this = this;
        var vorleser = new SpeechSynthesisUtterance(text);
        if (this.vorleserCallbacks) {
            vorleser.onend = function () {
                Logger.debugMessage("Vorlesen beendet");
                if (_this.vorleserCallbacks.onend) {
                    _this.vorleserCallbacks.onend();
                }
            };
            vorleser.onstart = function () {
                Logger.debugMessage("Vorlesen gestartet");
                if (_this.vorleserCallbacks.onstart) {
                    _this.vorleserCallbacks.onstart();
                }
            };
            vorleser.onpause = function () {
                Logger.debugMessage("Pause mit Vorlesen");
                if (_this.vorleserCallbacks.onpause) {
                    _this.vorleserCallbacks.onpause();
                }
            };
            vorleser.onresume = function () {
                Logger.debugMessage("Fortsetzen des Vorlesen");
                if (_this.vorleserCallbacks.onresume) {
                    _this.vorleserCallbacks.onresume();
                }
            };
            vorleser.onerror = function () {
                Logger.errorMessage("Fehler beim Vorlesen");
                if (_this.vorleserCallbacks.onerror) {
                    _this.vorleserCallbacks.onerror();
                }
            };
        }
        this.initialisiereVorleserStimme(vorleser);
        return vorleser;
    };
    Sprachausgabe.prototype.initialisiereVorleserStimme = function (vorleser) {
        Logger.infoMessage("erzeugeVorleser started");
        vorleser.pitch = this.sprachauswahl.getPitch();
        vorleser.rate = this.sprachauswahl.getRate();
        vorleser.volume = this.sprachauswahl.getVolume();
        vorleser.voice = this.sprachauswahl.getVoice();
        if (vorleser.voice && vorleser.voice.lang) {
            vorleser.lang = vorleser.voice.lang;
        }
        else {
            vorleser.lang = "de-DE";
        }
    };
    Sprachausgabe.prototype.textVorlesen = function (zuLesenderText) {
        var _this = this;
        if (zuLesenderText) {
            var texte = zuLesenderText.match(/(\S+\s){1,20}/g);
            texte.forEach(function (text) {
                var vorleser = _this.erzeugeVorleser(text);
                Logger.infoMessage("speaker lang used:" + vorleser.lang);
                if (vorleser.voice) {
                    Logger.infoMessage("speaker voice used:" + vorleser.voice.name);
                    Logger.infoMessage("speaker voice lang:" + vorleser.voice.lang);
                }
                else {
                    Logger.infoMessage("no voice matched for text: " + zuLesenderText);
                }
                _this.sprachSynthese.getSynthese().speak(vorleser);
            });
        }
    };
    Sprachausgabe.prototype.cancelSpeakingAndClearQueue = function () {
        this.sprachSynthese.getSynthese().cancel();
    };
    Sprachausgabe.prototype.pauseSpeakingFromQueue = function () {
        this.sprachSynthese.getSynthese().pause();
    };
    Sprachausgabe.prototype.resumeSpeakingFromQueue = function () {
        this.sprachSynthese.getSynthese().resume();
    };
    Sprachausgabe.prototype.isPaused = function () {
        return this.sprachSynthese.getSynthese().paused;
    };
    return Sprachausgabe;
}());
var Sprachauswahl = /** @class */ (function () {
    function Sprachauswahl(sprachsynthese) {
        Logger.infoMessage("create Sprachauswahl");
        this.sprachSynthese = sprachsynthese;
        this.rate = 1;
        this.volume = 1;
        this.pitch = 1;
        this.initDefaultStimme();
    }
    Sprachauswahl.prototype.initDefaultStimme = function () {
        var voices = this.sprachSynthese.getVoices();
        if (!voices) {
            var voicesRetry = this.sprachSynthese.getVoices();
            this.voice = voicesRetry[0];
        }
        else {
            this.voice = voices[0];
        }
    };
    Sprachauswahl.prototype.getRate = function () {
        return this.rate;
    };
    Sprachauswahl.prototype.getVolume = function () {
        return this.volume;
    };
    Sprachauswahl.prototype.getPitch = function () {
        return this.pitch;
    };
    Sprachauswahl.prototype.getVoice = function () {
        return this.voice;
    };
    Sprachauswahl.prototype.getVoiceList = function () {
        return this.sprachSynthese.getVoices();
    };
    Sprachauswahl.prototype.setChoosenVoice = function (voice) {
        this.voice = voice;
    };
    Sprachauswahl.prototype.setVolume = function (volume) {
        this.volume = volume;
    };
    Sprachauswahl.prototype.setRate = function (rate) {
        this.rate = rate;
    };
    Sprachauswahl.prototype.setPitch = function (pitch) {
        this.pitch = pitch;
    };
    return Sprachauswahl;
}());
function isFunction(x) {
    return typeof x === 'function';
}
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError(err);
        }
    },
    complete: function () { }
};
var isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
function isObject(x) {
    return x !== null && typeof x === 'object';
}
var UnsubscriptionErrorImpl = (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
var UnsubscriptionError = UnsubscriptionErrorImpl;
var Subscription = /** @class */ (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent = _parentOrParents[index];
                parent.remove(this);
            }
        }
        if (isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    return Subscription;
}());
Subscription.EMPTY = (function (empty) {
    empty.closed = true;
    return empty;
}(new Subscription()));
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
}
var rxSubscriber = (function () { return typeof Symbol === 'function'
    ? Symbol('rxSubscriber')
    : '@@rxSubscriber_' + Math.random(); })();
var Subscriber = /** @class */ (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription));
var SafeSubscriber = /** @class */ (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== empty) {
                context = Object.create(observerOrNext);
                if (isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
function canReportError(observer) {
    while (observer) {
        var closed = observer.closed, destination = observer.destination, isStopped = observer.isStopped;
        if (closed || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber]) {
            return nextOrObserver[rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber(empty);
    }
    return new Subscriber(nextOrObserver, error, complete);
}
var observable = (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
function identity(x) {
    return x;
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
var Observable = /** @class */ (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    return Observable;
}());
Observable.create = function (subscribe) {
    return new Observable(subscribe);
};
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
var ObjectUnsubscribedErrorImpl = (function () {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
var SubjectSubscription = /** @class */ (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription));
var SubjectSubscriber = /** @class */ (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber));
var Subject = /** @class */ (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    return Subject;
}(Observable));
Subject.create = function (destination, source) {
    return new AnonymousSubject(destination, source);
};
var AnonymousSubject = /** @class */ (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));
var Fileloader = /** @class */ (function () {
    function Fileloader(fileURL) {
        this.url = fileURL;
    }
    Fileloader.of = function (fileURL) {
        return new Fileloader(new URL(fileURL));
    };
    Fileloader.prototype.getFileContent = function () {
        var subject = new Subject();
        var client = new XMLHttpRequest();
        client.addEventListener("load", function (event) {
            console.log(event.total + " bytes gelesen.");
            subject.next(client.responseText);
        });
        // client.onloadend = function(pe) {
        //   progressBar.value = pe.loaded
        // }
        client.open("GET", this.url.toString());
        client.send();
        return subject;
    };
    return Fileloader;
}());
function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var defaults = createCommonjsModule(function (module) {
    function getDefaults() {
        return {
            baseUrl: null,
            breaks: false,
            gfm: true,
            headerIds: true,
            headerPrefix: '',
            highlight: null,
            langPrefix: 'language-',
            mangle: true,
            pedantic: false,
            renderer: null,
            sanitize: false,
            sanitizer: null,
            silent: false,
            smartLists: false,
            smartypants: false,
            tokenizer: null,
            xhtml: false
        };
    }
    function changeDefaults(newDefaults) {
        module.exports.defaults = newDefaults;
    }
    module.exports = {
        defaults: getDefaults(),
        getDefaults: getDefaults,
        changeDefaults: changeDefaults
    };
});
/**
 * Helpers
 */
var escapeTest = /[&<>"']/;
var escapeReplace = /[&<>"']/g;
var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
var escapeReplacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};
var getEscapeReplacement = function (ch) { return escapeReplacements[ch]; };
function escape(html, encode) {
    if (encode) {
        if (escapeTest.test(html)) {
            return html.replace(escapeReplace, getEscapeReplacement);
        }
    }
    else {
        if (escapeTestNoEncode.test(html)) {
            return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
        }
    }
    return html;
}
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html) {
    // explicitly match decimal, hex, and named HTML entities
    return html.replace(unescapeTest, function (_, n) {
        n = n.toLowerCase();
        if (n === 'colon')
            return ':';
        if (n.charAt(0) === '#') {
            return n.charAt(1) === 'x'
                ? String.fromCharCode(parseInt(n.substring(2), 16))
                : String.fromCharCode(+n.substring(1));
        }
        return '';
    });
}
var caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
    regex = regex.source || regex;
    opt = opt || '';
    var obj = {
        replace: function (name, val) {
            val = val.source || val;
            val = val.replace(caret, '$1');
            regex = regex.replace(name, val);
            return obj;
        },
        getRegex: function () {
            return new RegExp(regex, opt);
        }
    };
    return obj;
}
var nonWordAndColonTest = /[^\w:]/g;
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(sanitize, base, href) {
    if (sanitize) {
        var prot = void 0;
        try {
            prot = decodeURIComponent(unescape(href))
                .replace(nonWordAndColonTest, '')
                .toLowerCase();
        }
        catch (e) {
            return null;
        }
        if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
            return null;
        }
    }
    if (base && !originIndependentUrl.test(href)) {
        href = resolveUrl(base, href);
    }
    try {
        href = encodeURI(href).replace(/%25/g, '%');
    }
    catch (e) {
        return null;
    }
    return href;
}
var baseUrls = {};
var justDomain = /^[^:]+:\/*[^/]*$/;
var protocol = /^([^:]+:)[\s\S]*$/;
var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function resolveUrl(base, href) {
    if (!baseUrls[' ' + base]) {
        // we can ignore everything in base after the last slash of its path component,
        // but we might need to add _that_
        // https://tools.ietf.org/html/rfc3986#section-3
        if (justDomain.test(base)) {
            baseUrls[' ' + base] = base + '/';
        }
        else {
            baseUrls[' ' + base] = rtrim(base, '/', true);
        }
    }
    base = baseUrls[' ' + base];
    var relativeBase = base.indexOf(':') === -1;
    if (href.substring(0, 2) === '//') {
        if (relativeBase) {
            return href;
        }
        return base.replace(protocol, '$1') + href;
    }
    else if (href.charAt(0) === '/') {
        if (relativeBase) {
            return href;
        }
        return base.replace(domain, '$1') + href;
    }
    else {
        return base + href;
    }
}
var noopTest = { exec: function noopTest() { } };
function merge(obj) {
    var i = 1, target, key;
    for (; i < arguments.length; i++) {
        target = arguments[i];
        for (key in target) {
            if (Object.prototype.hasOwnProperty.call(target, key)) {
                obj[key] = target[key];
            }
        }
    }
    return obj;
}
function splitCells(tableRow, count) {
    // ensure that every cell-delimiting pipe has a space
    // before it to distinguish it from an escaped pipe
    var row = tableRow.replace(/\|/g, function (match, offset, str) {
        var escaped = false, curr = offset;
        while (--curr >= 0 && str[curr] === '\\')
            escaped = !escaped;
        if (escaped) {
            // odd number of slashes means | is escaped
            // so we leave it alone
            return '|';
        }
        else {
            // add space before unescaped |
            return ' |';
        }
    }), cells = row.split(/ \|/);
    var i = 0;
    if (cells.length > count) {
        cells.splice(count);
    }
    else {
        while (cells.length < count)
            cells.push('');
    }
    for (; i < cells.length; i++) {
        // leading or trailing whitespace is ignored per the gfm spec
        cells[i] = cells[i].trim().replace(/\\\|/g, '|');
    }
    return cells;
}
// Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
// /c*$/ is vulnerable to REDOS.
// invert: Remove suffix of non-c chars instead. Default falsey.
function rtrim(str, c, invert) {
    var l = str.length;
    if (l === 0) {
        return '';
    }
    // Length of suffix matching the invert condition.
    var suffLen = 0;
    // Step left until we fail to match the invert condition.
    while (suffLen < l) {
        var currChar = str.charAt(l - suffLen - 1);
        if (currChar === c && !invert) {
            suffLen++;
        }
        else if (currChar !== c && invert) {
            suffLen++;
        }
        else {
            break;
        }
    }
    return str.substr(0, l - suffLen);
}
function findClosingBracket(str, b) {
    if (str.indexOf(b[1]) === -1) {
        return -1;
    }
    var l = str.length;
    var level = 0, i = 0;
    for (; i < l; i++) {
        if (str[i] === '\\') {
            i++;
        }
        else if (str[i] === b[0]) {
            level++;
        }
        else if (str[i] === b[1]) {
            level--;
            if (level < 0) {
                return i;
            }
        }
    }
    return -1;
}
function checkSanitizeDeprecation(opt) {
    if (opt && opt.sanitize && !opt.silent) {
        console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
    }
}
var helpers = {
    escape: escape,
    unescape: unescape,
    edit: edit,
    cleanUrl: cleanUrl,
    resolveUrl: resolveUrl,
    noopTest: noopTest,
    merge: merge,
    splitCells: splitCells,
    rtrim: rtrim,
    findClosingBracket: findClosingBracket,
    checkSanitizeDeprecation: checkSanitizeDeprecation
};
var defaults$1 = defaults.defaults;
var rtrim$1 = helpers.rtrim, splitCells$1 = helpers.splitCells, escape$1 = helpers.escape, findClosingBracket$1 = helpers.findClosingBracket;
function outputLink(cap, link, raw) {
    var href = link.href;
    var title = link.title ? escape$1(link.title) : null;
    if (cap[0].charAt(0) !== '!') {
        return {
            type: 'link',
            raw: raw,
            href: href,
            title: title,
            text: cap[1]
        };
    }
    else {
        return {
            type: 'image',
            raw: raw,
            text: escape$1(cap[1]),
            href: href,
            title: title
        };
    }
}
/**
 * Tokenizer
 */
var Tokenizer_1 = /** @class */ (function () {
    function Tokenizer(options) {
        this.options = options || defaults$1;
    }
    Tokenizer.prototype.space = function (src) {
        var cap = this.rules.block.newline.exec(src);
        if (cap) {
            if (cap[0].length > 1) {
                return {
                    type: 'space',
                    raw: cap[0]
                };
            }
            return { raw: '\n' };
        }
    };
    Tokenizer.prototype.code = function (src, tokens) {
        var cap = this.rules.block.code.exec(src);
        if (cap) {
            var lastToken = tokens[tokens.length - 1];
            // An indented code block cannot interrupt a paragraph.
            if (lastToken && lastToken.type === 'paragraph') {
                tokens.pop();
                lastToken.text += '\n' + cap[0].trimRight();
                lastToken.raw += '\n' + cap[0];
                return lastToken;
            }
            else {
                var text = cap[0].replace(/^ {4}/gm, '');
                return {
                    type: 'code',
                    raw: cap[0],
                    codeBlockStyle: 'indented',
                    text: !this.options.pedantic
                        ? rtrim$1(text, '\n')
                        : text
                };
            }
        }
    };
    Tokenizer.prototype.fences = function (src) {
        var cap = this.rules.block.fences.exec(src);
        if (cap) {
            return {
                type: 'code',
                raw: cap[0],
                lang: cap[2] ? cap[2].trim() : cap[2],
                text: cap[3] || ''
            };
        }
    };
    Tokenizer.prototype.heading = function (src) {
        var cap = this.rules.block.heading.exec(src);
        if (cap) {
            return {
                type: 'heading',
                raw: cap[0],
                depth: cap[1].length,
                text: cap[2]
            };
        }
    };
    Tokenizer.prototype.nptable = function (src) {
        var cap = this.rules.block.nptable.exec(src);
        if (cap) {
            var item = {
                type: 'table',
                header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
                align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : [],
                raw: cap[0]
            };
            if (item.header.length === item.align.length) {
                var l = item.align.length;
                var i = void 0;
                for (i = 0; i < l; i++) {
                    if (/^ *-+: *$/.test(item.align[i])) {
                        item.align[i] = 'right';
                    }
                    else if (/^ *:-+: *$/.test(item.align[i])) {
                        item.align[i] = 'center';
                    }
                    else if (/^ *:-+ *$/.test(item.align[i])) {
                        item.align[i] = 'left';
                    }
                    else {
                        item.align[i] = null;
                    }
                }
                l = item.cells.length;
                for (i = 0; i < l; i++) {
                    item.cells[i] = splitCells$1(item.cells[i], item.header.length);
                }
                return item;
            }
        }
    };
    Tokenizer.prototype.hr = function (src) {
        var cap = this.rules.block.hr.exec(src);
        if (cap) {
            return {
                type: 'hr',
                raw: cap[0]
            };
        }
    };
    Tokenizer.prototype.blockquote = function (src) {
        var cap = this.rules.block.blockquote.exec(src);
        if (cap) {
            var text = cap[0].replace(/^ *> ?/gm, '');
            return {
                type: 'blockquote',
                raw: cap[0],
                text: text
            };
        }
    };
    Tokenizer.prototype.list = function (src) {
        var cap = this.rules.block.list.exec(src);
        if (cap) {
            var raw = cap[0];
            var bull = cap[2];
            var isordered = bull.length > 1;
            var list = {
                type: 'list',
                raw: raw,
                ordered: isordered,
                start: isordered ? +bull : '',
                loose: false,
                items: []
            };
            // Get each top-level item.
            var itemMatch = cap[0].match(this.rules.block.item);
            var next = false, item = void 0, space = void 0, b = void 0, addBack = void 0, loose = void 0, istask = void 0, ischecked = void 0;
            var l = itemMatch.length;
            for (var i = 0; i < l; i++) {
                item = itemMatch[i];
                raw = item;
                // Remove the list item's bullet
                // so it is seen as the next token.
                space = item.length;
                item = item.replace(/^ *([*+-]|\d+\.) */, '');
                // Outdent whatever the
                // list item contains. Hacky.
                if (~item.indexOf('\n ')) {
                    space -= item.length;
                    item = !this.options.pedantic
                        ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
                        : item.replace(/^ {1,4}/gm, '');
                }
                // Determine whether the next list item belongs here.
                // Backpedal if it does not belong in this list.
                if (i !== l - 1) {
                    b = this.rules.block.bullet.exec(itemMatch[i + 1])[0];
                    if (bull.length > 1 ? b.length === 1
                        : (b.length > 1 || (this.options.smartLists && b !== bull))) {
                        addBack = itemMatch.slice(i + 1).join('\n');
                        list.raw = list.raw.substring(0, list.raw.length - addBack.length);
                        i = l - 1;
                    }
                }
                // Determine whether item is loose or not.
                // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
                // for discount behavior.
                loose = next || /\n\n(?!\s*$)/.test(item);
                if (i !== l - 1) {
                    next = item.charAt(item.length - 1) === '\n';
                    if (!loose)
                        loose = next;
                }
                if (loose) {
                    list.loose = true;
                }
                // Check for task list items
                istask = /^\[[ xX]\] /.test(item);
                ischecked = undefined;
                if (istask) {
                    ischecked = item[1] !== ' ';
                    item = item.replace(/^\[[ xX]\] +/, '');
                }
                list.items.push({
                    raw: raw,
                    task: istask,
                    checked: ischecked,
                    loose: loose,
                    text: item
                });
            }
            return list;
        }
    };
    Tokenizer.prototype.html = function (src) {
        var cap = this.rules.block.html.exec(src);
        if (cap) {
            return {
                type: this.options.sanitize
                    ? 'paragraph'
                    : 'html',
                raw: cap[0],
                pre: !this.options.sanitizer
                    && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
                text: this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$1(cap[0])) : cap[0]
            };
        }
    };
    Tokenizer.prototype.def = function (src) {
        var cap = this.rules.block.def.exec(src);
        if (cap) {
            if (cap[3])
                cap[3] = cap[3].substring(1, cap[3].length - 1);
            var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
            return {
                tag: tag,
                raw: cap[0],
                href: cap[2],
                title: cap[3]
            };
        }
    };
    Tokenizer.prototype.table = function (src) {
        var cap = this.rules.block.table.exec(src);
        if (cap) {
            var item = {
                type: 'table',
                header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
                align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
            };
            if (item.header.length === item.align.length) {
                item.raw = cap[0];
                var l = item.align.length;
                var i = void 0;
                for (i = 0; i < l; i++) {
                    if (/^ *-+: *$/.test(item.align[i])) {
                        item.align[i] = 'right';
                    }
                    else if (/^ *:-+: *$/.test(item.align[i])) {
                        item.align[i] = 'center';
                    }
                    else if (/^ *:-+ *$/.test(item.align[i])) {
                        item.align[i] = 'left';
                    }
                    else {
                        item.align[i] = null;
                    }
                }
                l = item.cells.length;
                for (i = 0; i < l; i++) {
                    item.cells[i] = splitCells$1(item.cells[i].replace(/^ *\| *| *\| *$/g, ''), item.header.length);
                }
                return item;
            }
        }
    };
    Tokenizer.prototype.lheading = function (src) {
        var cap = this.rules.block.lheading.exec(src);
        if (cap) {
            return {
                type: 'heading',
                raw: cap[0],
                depth: cap[2].charAt(0) === '=' ? 1 : 2,
                text: cap[1]
            };
        }
    };
    Tokenizer.prototype.paragraph = function (src) {
        var cap = this.rules.block.paragraph.exec(src);
        if (cap) {
            return {
                type: 'paragraph',
                raw: cap[0],
                text: cap[1].charAt(cap[1].length - 1) === '\n'
                    ? cap[1].slice(0, -1)
                    : cap[1]
            };
        }
    };
    Tokenizer.prototype.text = function (src) {
        var cap = this.rules.block.text.exec(src);
        if (cap) {
            return {
                type: 'text',
                raw: cap[0],
                text: cap[0]
            };
        }
    };
    Tokenizer.prototype.escape = function (src) {
        var cap = this.rules.inline.escape.exec(src);
        if (cap) {
            return {
                type: 'escape',
                raw: cap[0],
                text: escape$1(cap[1])
            };
        }
    };
    Tokenizer.prototype.tag = function (src, inLink, inRawBlock) {
        var cap = this.rules.inline.tag.exec(src);
        if (cap) {
            if (!inLink && /^<a /i.test(cap[0])) {
                inLink = true;
            }
            else if (inLink && /^<\/a>/i.test(cap[0])) {
                inLink = false;
            }
            if (!inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
                inRawBlock = true;
            }
            else if (inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
                inRawBlock = false;
            }
            return {
                type: this.options.sanitize
                    ? 'text'
                    : 'html',
                raw: cap[0],
                inLink: inLink,
                inRawBlock: inRawBlock,
                text: this.options.sanitize
                    ? (this.options.sanitizer
                        ? this.options.sanitizer(cap[0])
                        : escape$1(cap[0]))
                    : cap[0]
            };
        }
    };
    Tokenizer.prototype.link = function (src) {
        var cap = this.rules.inline.link.exec(src);
        if (cap) {
            var lastParenIndex = findClosingBracket$1(cap[2], '()');
            if (lastParenIndex > -1) {
                var start = cap[0].indexOf('!') === 0 ? 5 : 4;
                var linkLen = start + cap[1].length + lastParenIndex;
                cap[2] = cap[2].substring(0, lastParenIndex);
                cap[0] = cap[0].substring(0, linkLen).trim();
                cap[3] = '';
            }
            var href = cap[2];
            var title = '';
            if (this.options.pedantic) {
                var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
                if (link) {
                    href = link[1];
                    title = link[3];
                }
                else {
                    title = '';
                }
            }
            else {
                title = cap[3] ? cap[3].slice(1, -1) : '';
            }
            href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
            var token = outputLink(cap, {
                href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
                title: title ? title.replace(this.rules.inline._escapes, '$1') : title
            }, cap[0]);
            return token;
        }
    };
    Tokenizer.prototype.reflink = function (src, links) {
        var cap;
        if ((cap = this.rules.inline.reflink.exec(src))
            || (cap = this.rules.inline.nolink.exec(src))) {
            var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
            link = links[link.toLowerCase()];
            if (!link || !link.href) {
                var text = cap[0].charAt(0);
                return {
                    type: 'text',
                    raw: text,
                    text: text
                };
            }
            var token = outputLink(cap, link, cap[0]);
            return token;
        }
    };
    Tokenizer.prototype.strong = function (src) {
        var cap = this.rules.inline.strong.exec(src);
        if (cap) {
            return {
                type: 'strong',
                raw: cap[0],
                text: cap[4] || cap[3] || cap[2] || cap[1]
            };
        }
    };
    Tokenizer.prototype.em = function (src) {
        var cap = this.rules.inline.em.exec(src);
        if (cap) {
            return {
                type: 'em',
                raw: cap[0],
                text: cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]
            };
        }
    };
    Tokenizer.prototype.codespan = function (src) {
        var cap = this.rules.inline.code.exec(src);
        if (cap) {
            return {
                type: 'codespan',
                raw: cap[0],
                text: escape$1(cap[2].trim(), true)
            };
        }
    };
    Tokenizer.prototype.br = function (src) {
        var cap = this.rules.inline.br.exec(src);
        if (cap) {
            return {
                type: 'br',
                raw: cap[0]
            };
        }
    };
    Tokenizer.prototype.del = function (src) {
        var cap = this.rules.inline.del.exec(src);
        if (cap) {
            return {
                type: 'del',
                raw: cap[0],
                text: cap[1]
            };
        }
    };
    Tokenizer.prototype.autolink = function (src, mangle) {
        var cap = this.rules.inline.autolink.exec(src);
        if (cap) {
            var text = void 0, href = void 0;
            if (cap[2] === '@') {
                text = escape$1(this.options.mangle ? mangle(cap[1]) : cap[1]);
                href = 'mailto:' + text;
            }
            else {
                text = escape$1(cap[1]);
                href = text;
            }
            return {
                type: 'link',
                raw: cap[0],
                text: text,
                href: href,
                tokens: [
                    {
                        type: 'text',
                        raw: text,
                        text: text
                    }
                ]
            };
        }
    };
    Tokenizer.prototype.url = function (src, mangle) {
        var cap;
        if (cap = this.rules.inline.url.exec(src)) {
            var text = void 0, href = void 0;
            if (cap[2] === '@') {
                text = escape$1(this.options.mangle ? mangle(cap[0]) : cap[0]);
                href = 'mailto:' + text;
            }
            else {
                // do extended autolink path validation
                var prevCapZero = void 0;
                do {
                    prevCapZero = cap[0];
                    cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
                } while (prevCapZero !== cap[0]);
                text = escape$1(cap[0]);
                if (cap[1] === 'www.') {
                    href = 'http://' + text;
                }
                else {
                    href = text;
                }
            }
            return {
                type: 'link',
                raw: cap[0],
                text: text,
                href: href,
                tokens: [
                    {
                        type: 'text',
                        raw: text,
                        text: text
                    }
                ]
            };
        }
    };
    Tokenizer.prototype.inlineText = function (src, inRawBlock, smartypants) {
        var cap = this.rules.inline.text.exec(src);
        if (cap) {
            var text = void 0;
            if (inRawBlock) {
                text = this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$1(cap[0])) : cap[0];
            }
            else {
                text = escape$1(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
            }
            return {
                type: 'text',
                raw: cap[0],
                text: text
            };
        }
    };
    return Tokenizer;
}());
var noopTest$1 = helpers.noopTest, edit$1 = helpers.edit, merge$1 = helpers.merge;
/**
 * Block-Level Grammar
 */
var block = {
    newline: /^\n+/,
    code: /^( {4}[^\n]+\n*)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
    html: '^ {0,3}(?:' // optional indentation
        + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
        + '|comment[^\\n]*(\\n+|$)' // (2)
        + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
        + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
        + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
        + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
        + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
        + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
        + ')',
    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
    nptable: noopTest$1,
    table: noopTest$1,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    // regex template, placeholders will be replaced according to different paragraph
    // interruption rules of commonmark and the original markdown spec:
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
    text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit$1(block.def)
    .replace('label', block._label)
    .replace('title', block._title)
    .getRegex();
block.bullet = /(?:[*+-]|\d{1,9}\.)/;
block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
block.item = edit$1(block.item, 'gm')
    .replace(/bull/g, block.bullet)
    .getRegex();
block.list = edit$1(block.list)
    .replace(/bull/g, block.bullet)
    .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
    .replace('def', '\\n+(?=' + block.def.source + ')')
    .getRegex();
block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
    + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
    + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
    + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
    + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
    + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?-->/;
block.html = edit$1(block.html, 'i')
    .replace('comment', block._comment)
    .replace('tag', block._tag)
    .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
    .getRegex();
block.paragraph = edit$1(block._paragraph)
    .replace('hr', block.hr)
    .replace('heading', ' {0,3}#{1,6} ')
    .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
    .replace('blockquote', ' {0,3}>')
    .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
    .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
    .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
    .getRegex();
block.blockquote = edit$1(block.blockquote)
    .replace('paragraph', block.paragraph)
    .getRegex();
/**
 * Normal Block Grammar
 */
block.normal = merge$1({}, block);
/**
 * GFM Block Grammar
 */
block.gfm = merge$1({}, block.normal, {
    nptable: '^ *([^|\\n ].*\\|.*)\\n' // Header
        + ' *([-:]+ *\\|[-| :]*)' // Align
        + '(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
    table: '^ *\\|(.+)\\n' // Header
        + ' *\\|?( *[-:]+[-| :]*)' // Align
        + '(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells
});
block.gfm.nptable = edit$1(block.gfm.nptable)
    .replace('hr', block.hr)
    .replace('heading', ' {0,3}#{1,6} ')
    .replace('blockquote', ' {0,3}>')
    .replace('code', ' {4}[^\\n]')
    .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
    .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
    .replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
    .getRegex();
block.gfm.table = edit$1(block.gfm.table)
    .replace('hr', block.hr)
    .replace('heading', ' {0,3}#{1,6} ')
    .replace('blockquote', ' {0,3}>')
    .replace('code', ' {4}[^\\n]')
    .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
    .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
    .replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
    .getRegex();
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */
block.pedantic = merge$1({}, block.normal, {
    html: edit$1('^ *(?:comment *(?:\\n|\\s*$)'
        + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
        + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
        .replace('comment', block._comment)
        .replace(/tag/g, '(?!(?:'
        + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
        + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
        + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
        .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
    fences: noopTest$1,
    paragraph: edit$1(block.normal._paragraph)
        .replace('hr', block.hr)
        .replace('heading', ' *#{1,6} *[^\n]')
        .replace('lheading', block.lheading)
        .replace('blockquote', ' {0,3}>')
        .replace('|fences', '')
        .replace('|list', '')
        .replace('|html', '')
        .getRegex()
});
/**
 * Inline-Level Grammar
 */
var inline = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noopTest$1,
    tag: '^comment'
        + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
        + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
        + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
        + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
        + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
    em: /^_([^\s_])_(?!_)|^_([^\s_<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s*<\[])\*(?!\*)|^\*([^\s<"][\s\S]*?[^\s\[\*])\*(?![\]`punctuation])|^\*([^\s*"<\[][\s\S]*[^\s])\*(?!\*)/,
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: noopTest$1,
    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
};
// list of punctuation marks from common mark spec
// without ` and ] to workaround Rule 17 (inline code blocks/links)
inline._punctuation = '!"#$%&\'()*+\\-./:;<=>?@\\[^_{|}~';
inline.em = edit$1(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit$1(inline.autolink)
    .replace('scheme', inline._scheme)
    .replace('email', inline._email)
    .getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit$1(inline.tag)
    .replace('comment', block._comment)
    .replace('attribute', inline._attribute)
    .getRegex();
inline._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit$1(inline.link)
    .replace('label', inline._label)
    .replace('href', inline._href)
    .replace('title', inline._title)
    .getRegex();
inline.reflink = edit$1(inline.reflink)
    .replace('label', inline._label)
    .getRegex();
/**
 * Normal Inline Grammar
 */
inline.normal = merge$1({}, inline);
/**
 * Pedantic Inline Grammar
 */
inline.pedantic = merge$1({}, inline.normal, {
    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
    link: edit$1(/^!?\[(label)\]\((.*?)\)/)
        .replace('label', inline._label)
        .getRegex(),
    reflink: edit$1(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace('label', inline._label)
        .getRegex()
});
/**
 * GFM Inline Grammar
 */
inline.gfm = merge$1({}, inline.normal, {
    escape: edit$1(inline.escape).replace('])', '~|])').getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^~+(?=\S)([\s\S]*?\S)~+/,
    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
});
inline.gfm.url = edit$1(inline.gfm.url, 'i')
    .replace('email', inline.gfm._extended_email)
    .getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */
inline.breaks = merge$1({}, inline.gfm, {
    br: edit$1(inline.br).replace('{2,}', '*').getRegex(),
    text: edit$1(inline.gfm.text)
        .replace('\\b_', '\\b_| {2,}\\n')
        .replace(/\{2,\}/g, '*')
        .getRegex()
});
var rules = {
    block: block,
    inline: inline
};
var defaults$2 = defaults.defaults;
var block$1 = rules.block, inline$1 = rules.inline;
/**
 * smartypants text replacement
 */
function smartypants(text) {
    return text
        // em-dashes
        .replace(/---/g, '\u2014')
        // en-dashes
        .replace(/--/g, '\u2013')
        // opening singles
        .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
        // closing singles & apostrophes
        .replace(/'/g, '\u2019')
        // opening doubles
        .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
        // closing doubles
        .replace(/"/g, '\u201d')
        // ellipses
        .replace(/\.{3}/g, '\u2026');
}
/**
 * mangle email addresses
 */
function mangle(text) {
    var out = '', i, ch;
    var l = text.length;
    for (i = 0; i < l; i++) {
        ch = text.charCodeAt(i);
        if (Math.random() > 0.5) {
            ch = 'x' + ch.toString(16);
        }
        out += '&#' + ch + ';';
    }
    return out;
}
/**
 * Block Lexer
 */
var Lexer_1 = /** @class */ (function () {
    function Lexer(options) {
        this.tokens = [];
        this.tokens.links = Object.create(null);
        this.options = options || defaults$2;
        this.options.tokenizer = this.options.tokenizer || new Tokenizer_1();
        this.tokenizer = this.options.tokenizer;
        this.tokenizer.options = this.options;
        var rules = {
            block: block$1.normal,
            inline: inline$1.normal
        };
        if (this.options.pedantic) {
            rules.block = block$1.pedantic;
            rules.inline = inline$1.pedantic;
        }
        else if (this.options.gfm) {
            rules.block = block$1.gfm;
            if (this.options.breaks) {
                rules.inline = inline$1.breaks;
            }
            else {
                rules.inline = inline$1.gfm;
            }
        }
        this.tokenizer.rules = rules;
    }
    Object.defineProperty(Lexer, "rules", {
        /**
         * Expose Rules
         */
        get: function () {
            return {
                block: block$1,
                inline: inline$1
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Static Lex Method
     */
    Lexer.lex = function (src, options) {
        var lexer = new Lexer(options);
        return lexer.lex(src);
    };
    /**
     * Preprocessing
     */
    Lexer.prototype.lex = function (src) {
        src = src
            .replace(/\r\n|\r/g, '\n')
            .replace(/\t/g, '    ');
        this.blockTokens(src, this.tokens, true);
        this.inline(this.tokens);
        return this.tokens;
    };
    /**
     * Lexing
     */
    Lexer.prototype.blockTokens = function (src, tokens, top) {
        if (tokens === void 0) { tokens = []; }
        if (top === void 0) { top = true; }
        src = src.replace(/^ +$/gm, '');
        var token, i, l;
        while (src) {
            // newline
            if (token = this.tokenizer.space(src)) {
                src = src.substring(token.raw.length);
                if (token.type) {
                    tokens.push(token);
                }
                continue;
            }
            // code
            if (token = this.tokenizer.code(src, tokens)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // fences
            if (token = this.tokenizer.fences(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // heading
            if (token = this.tokenizer.heading(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // table no leading pipe (gfm)
            if (token = this.tokenizer.nptable(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // hr
            if (token = this.tokenizer.hr(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // blockquote
            if (token = this.tokenizer.blockquote(src)) {
                src = src.substring(token.raw.length);
                token.tokens = this.blockTokens(token.text, [], top);
                tokens.push(token);
                continue;
            }
            // list
            if (token = this.tokenizer.list(src)) {
                src = src.substring(token.raw.length);
                l = token.items.length;
                for (i = 0; i < l; i++) {
                    token.items[i].tokens = this.blockTokens(token.items[i].text, [], false);
                }
                tokens.push(token);
                continue;
            }
            // html
            if (token = this.tokenizer.html(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // def
            if (top && (token = this.tokenizer.def(src))) {
                src = src.substring(token.raw.length);
                if (!this.tokens.links[token.tag]) {
                    this.tokens.links[token.tag] = {
                        href: token.href,
                        title: token.title
                    };
                }
                continue;
            }
            // table (gfm)
            if (token = this.tokenizer.table(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // lheading
            if (token = this.tokenizer.lheading(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // top-level paragraph
            if (top && (token = this.tokenizer.paragraph(src))) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // text
            if (token = this.tokenizer.text(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            if (src) {
                var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
                if (this.options.silent) {
                    console.error(errMsg);
                    break;
                }
                else {
                    throw new Error(errMsg);
                }
            }
        }
        return tokens;
    };
    Lexer.prototype.inline = function (tokens) {
        var i, j, k, l2, row, token;
        var l = tokens.length;
        for (i = 0; i < l; i++) {
            token = tokens[i];
            switch (token.type) {
                case 'paragraph':
                case 'text':
                case 'heading': {
                    token.tokens = [];
                    this.inlineTokens(token.text, token.tokens);
                    break;
                }
                case 'table': {
                    token.tokens = {
                        header: [],
                        cells: []
                    };
                    // header
                    l2 = token.header.length;
                    for (j = 0; j < l2; j++) {
                        token.tokens.header[j] = [];
                        this.inlineTokens(token.header[j], token.tokens.header[j]);
                    }
                    // cells
                    l2 = token.cells.length;
                    for (j = 0; j < l2; j++) {
                        row = token.cells[j];
                        token.tokens.cells[j] = [];
                        for (k = 0; k < row.length; k++) {
                            token.tokens.cells[j][k] = [];
                            this.inlineTokens(row[k], token.tokens.cells[j][k]);
                        }
                    }
                    break;
                }
                case 'blockquote': {
                    this.inline(token.tokens);
                    break;
                }
                case 'list': {
                    l2 = token.items.length;
                    for (j = 0; j < l2; j++) {
                        this.inline(token.items[j].tokens);
                    }
                    break;
                }
            }
        }
        return tokens;
    };
    /**
     * Lexing/Compiling
     */
    Lexer.prototype.inlineTokens = function (src, tokens, inLink, inRawBlock) {
        if (tokens === void 0) { tokens = []; }
        if (inLink === void 0) { inLink = false; }
        if (inRawBlock === void 0) { inRawBlock = false; }
        var token;
        while (src) {
            // escape
            if (token = this.tokenizer.escape(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // tag
            if (token = this.tokenizer.tag(src, inLink, inRawBlock)) {
                src = src.substring(token.raw.length);
                inLink = token.inLink;
                inRawBlock = token.inRawBlock;
                tokens.push(token);
                continue;
            }
            // link
            if (token = this.tokenizer.link(src)) {
                src = src.substring(token.raw.length);
                if (token.type === 'link') {
                    token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
                }
                tokens.push(token);
                continue;
            }
            // reflink, nolink
            if (token = this.tokenizer.reflink(src, this.tokens.links)) {
                src = src.substring(token.raw.length);
                if (token.type === 'link') {
                    token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
                }
                tokens.push(token);
                continue;
            }
            // strong
            if (token = this.tokenizer.strong(src)) {
                src = src.substring(token.raw.length);
                token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
                tokens.push(token);
                continue;
            }
            // em
            if (token = this.tokenizer.em(src)) {
                src = src.substring(token.raw.length);
                token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
                tokens.push(token);
                continue;
            }
            // code
            if (token = this.tokenizer.codespan(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // br
            if (token = this.tokenizer.br(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // del (gfm)
            if (token = this.tokenizer.del(src)) {
                src = src.substring(token.raw.length);
                token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
                tokens.push(token);
                continue;
            }
            // autolink
            if (token = this.tokenizer.autolink(src, mangle)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // url (gfm)
            if (!inLink && (token = this.tokenizer.url(src, mangle))) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // text
            if (token = this.tokenizer.inlineText(src, inRawBlock, smartypants)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            if (src) {
                var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
                if (this.options.silent) {
                    console.error(errMsg);
                    break;
                }
                else {
                    throw new Error(errMsg);
                }
            }
        }
        return tokens;
    };
    return Lexer;
}());
var defaults$3 = defaults.defaults;
var cleanUrl$1 = helpers.cleanUrl, escape$2 = helpers.escape;
/**
 * Renderer
 */
var Renderer_1 = /** @class */ (function () {
    function Renderer(options) {
        this.options = options || defaults$3;
    }
    Renderer.prototype.code = function (code, infostring, escaped) {
        var lang = (infostring || '').match(/\S*/)[0];
        if (this.options.highlight) {
            var out = this.options.highlight(code, lang);
            if (out != null && out !== code) {
                escaped = true;
                code = out;
            }
        }
        if (!lang) {
            return '<pre><code>'
                + (escaped ? code : escape$2(code, true))
                + '</code></pre>';
        }
        return '<pre><code class="'
            + this.options.langPrefix
            + escape$2(lang, true)
            + '">'
            + (escaped ? code : escape$2(code, true))
            + '</code></pre>\n';
    };
    Renderer.prototype.blockquote = function (quote) {
        return '<blockquote>\n' + quote + '</blockquote>\n';
    };
    Renderer.prototype.html = function (html) {
        return html;
    };
    Renderer.prototype.heading = function (text, level, raw, slugger) {
        if (this.options.headerIds) {
            return '<h'
                + level
                + ' id="'
                + this.options.headerPrefix
                + slugger.slug(raw)
                + '">'
                + text
                + '</h'
                + level
                + '>\n';
        }
        // ignore IDs
        return '<h' + level + '>' + text + '</h' + level + '>\n';
    };
    Renderer.prototype.hr = function () {
        return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    };
    Renderer.prototype.list = function (body, ordered, start) {
        var type = ordered ? 'ol' : 'ul', startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
        return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
    };
    Renderer.prototype.listitem = function (text) {
        return '<li>' + text + '</li>\n';
    };
    Renderer.prototype.checkbox = function (checked) {
        return '<input '
            + (checked ? 'checked="" ' : '')
            + 'disabled="" type="checkbox"'
            + (this.options.xhtml ? ' /' : '')
            + '> ';
    };
    Renderer.prototype.paragraph = function (text) {
        return '<p>' + text + '</p>\n';
    };
    Renderer.prototype.table = function (header, body) {
        if (body)
            body = '<tbody>' + body + '</tbody>';
        return '<table>\n'
            + '<thead>\n'
            + header
            + '</thead>\n'
            + body
            + '</table>\n';
    };
    Renderer.prototype.tablerow = function (content) {
        return '<tr>\n' + content + '</tr>\n';
    };
    Renderer.prototype.tablecell = function (content, flags) {
        var type = flags.header ? 'th' : 'td';
        var tag = flags.align
            ? '<' + type + ' align="' + flags.align + '">'
            : '<' + type + '>';
        return tag + content + '</' + type + '>\n';
    };
    // span level renderer
    Renderer.prototype.strong = function (text) {
        return '<strong>' + text + '</strong>';
    };
    Renderer.prototype.em = function (text) {
        return '<em>' + text + '</em>';
    };
    Renderer.prototype.codespan = function (text) {
        return '<code>' + text + '</code>';
    };
    Renderer.prototype.br = function () {
        return this.options.xhtml ? '<br/>' : '<br>';
    };
    Renderer.prototype.del = function (text) {
        return '<del>' + text + '</del>';
    };
    Renderer.prototype.link = function (href, title, text) {
        href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);
        if (href === null) {
            return text;
        }
        var out = '<a href="' + escape$2(href) + '"';
        if (title) {
            out += ' title="' + title + '"';
        }
        out += '>' + text + '</a>';
        return out;
    };
    Renderer.prototype.image = function (href, title, text) {
        href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);
        if (href === null) {
            return text;
        }
        var out = '<img src="' + href + '" alt="' + text + '"';
        if (title) {
            out += ' title="' + title + '"';
        }
        out += this.options.xhtml ? '/>' : '>';
        return out;
    };
    Renderer.prototype.text = function (text) {
        return text;
    };
    return Renderer;
}());
/**
 * TextRenderer
 * returns only the textual part of the token
 */
var TextRenderer_1 = /** @class */ (function () {
    function TextRenderer() {
    }
    // no need for block level renderers
    TextRenderer.prototype.strong = function (text) {
        return text;
    };
    TextRenderer.prototype.em = function (text) {
        return text;
    };
    TextRenderer.prototype.codespan = function (text) {
        return text;
    };
    TextRenderer.prototype.del = function (text) {
        return text;
    };
    TextRenderer.prototype.html = function (text) {
        return text;
    };
    TextRenderer.prototype.text = function (text) {
        return text;
    };
    TextRenderer.prototype.link = function (href, title, text) {
        return '' + text;
    };
    TextRenderer.prototype.image = function (href, title, text) {
        return '' + text;
    };
    TextRenderer.prototype.br = function () {
        return '';
    };
    return TextRenderer;
}());
/**
 * Slugger generates header id
 */
var Slugger_1 = /** @class */ (function () {
    function Slugger() {
        this.seen = {};
    }
    /**
     * Convert string to unique id
     */
    Slugger.prototype.slug = function (value) {
        var slug = value
            .toLowerCase()
            .trim()
            // remove html tags
            .replace(/<[!\/a-z].*?>/ig, '')
            // remove unwanted chars
            .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
            .replace(/\s/g, '-');
        if (this.seen.hasOwnProperty(slug)) {
            var originalSlug = slug;
            do {
                this.seen[originalSlug]++;
                slug = originalSlug + '-' + this.seen[originalSlug];
            } while (this.seen.hasOwnProperty(slug));
        }
        this.seen[slug] = 0;
        return slug;
    };
    return Slugger;
}());
var defaults$4 = defaults.defaults;
var unescape$1 = helpers.unescape;
/**
 * Parsing & Compiling
 */
var Parser_1 = /** @class */ (function () {
    function Parser(options) {
        this.options = options || defaults$4;
        this.options.renderer = this.options.renderer || new Renderer_1();
        this.renderer = this.options.renderer;
        this.renderer.options = this.options;
        this.textRenderer = new TextRenderer_1();
        this.slugger = new Slugger_1();
    }
    /**
     * Static Parse Method
     */
    Parser.parse = function (tokens, options) {
        var parser = new Parser(options);
        return parser.parse(tokens);
    };
    /**
     * Parse Loop
     */
    Parser.prototype.parse = function (tokens, top) {
        if (top === void 0) { top = true; }
        var out = '', i, j, k, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox;
        var l = tokens.length;
        for (i = 0; i < l; i++) {
            token = tokens[i];
            switch (token.type) {
                case 'space': {
                    continue;
                }
                case 'hr': {
                    out += this.renderer.hr();
                    continue;
                }
                case 'heading': {
                    out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape$1(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
                    continue;
                }
                case 'code': {
                    out += this.renderer.code(token.text, token.lang, token.escaped);
                    continue;
                }
                case 'table': {
                    header = '';
                    // header
                    cell = '';
                    l2 = token.header.length;
                    for (j = 0; j < l2; j++) {
                        cell += this.renderer.tablecell(this.parseInline(token.tokens.header[j]), { header: true, align: token.align[j] });
                    }
                    header += this.renderer.tablerow(cell);
                    body = '';
                    l2 = token.cells.length;
                    for (j = 0; j < l2; j++) {
                        row = token.tokens.cells[j];
                        cell = '';
                        l3 = row.length;
                        for (k = 0; k < l3; k++) {
                            cell += this.renderer.tablecell(this.parseInline(row[k]), { header: false, align: token.align[k] });
                        }
                        body += this.renderer.tablerow(cell);
                    }
                    out += this.renderer.table(header, body);
                    continue;
                }
                case 'blockquote': {
                    body = this.parse(token.tokens);
                    out += this.renderer.blockquote(body);
                    continue;
                }
                case 'list': {
                    ordered = token.ordered;
                    start = token.start;
                    loose = token.loose;
                    l2 = token.items.length;
                    body = '';
                    for (j = 0; j < l2; j++) {
                        item = token.items[j];
                        checked = item.checked;
                        task = item.task;
                        itemBody = '';
                        if (item.task) {
                            checkbox = this.renderer.checkbox(checked);
                            if (loose) {
                                if (item.tokens[0].type === 'text') {
                                    item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                                    if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                                        item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                                    }
                                }
                                else {
                                    item.tokens.unshift({
                                        type: 'text',
                                        text: checkbox
                                    });
                                }
                            }
                            else {
                                itemBody += checkbox;
                            }
                        }
                        itemBody += this.parse(item.tokens, loose);
                        body += this.renderer.listitem(itemBody, task, checked);
                    }
                    out += this.renderer.list(body, ordered, start);
                    continue;
                }
                case 'html': {
                    // TODO parse inline content if parameter markdown=1
                    out += this.renderer.html(token.text);
                    continue;
                }
                case 'paragraph': {
                    out += this.renderer.paragraph(this.parseInline(token.tokens));
                    continue;
                }
                case 'text': {
                    body = token.tokens ? this.parseInline(token.tokens) : token.text;
                    while (i + 1 < l && tokens[i + 1].type === 'text') {
                        token = tokens[++i];
                        body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
                    }
                    out += top ? this.renderer.paragraph(body) : body;
                    continue;
                }
                default: {
                    var errMsg = 'Token with "' + token.type + '" type was not found.';
                    if (this.options.silent) {
                        console.error(errMsg);
                        return;
                    }
                    else {
                        throw new Error(errMsg);
                    }
                }
            }
        }
        return out;
    };
    /**
     * Parse Inline Tokens
     */
    Parser.prototype.parseInline = function (tokens, renderer) {
        renderer = renderer || this.renderer;
        var out = '', i, token;
        var l = tokens.length;
        for (i = 0; i < l; i++) {
            token = tokens[i];
            switch (token.type) {
                case 'escape': {
                    out += renderer.text(token.text);
                    break;
                }
                case 'html': {
                    out += renderer.html(token.text);
                    break;
                }
                case 'link': {
                    out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
                    break;
                }
                case 'image': {
                    out += renderer.image(token.href, token.title, token.text);
                    break;
                }
                case 'strong': {
                    out += renderer.strong(this.parseInline(token.tokens, renderer));
                    break;
                }
                case 'em': {
                    out += renderer.em(this.parseInline(token.tokens, renderer));
                    break;
                }
                case 'codespan': {
                    out += renderer.codespan(token.text);
                    break;
                }
                case 'br': {
                    out += renderer.br();
                    break;
                }
                case 'del': {
                    out += renderer.del(this.parseInline(token.tokens, renderer));
                    break;
                }
                case 'text': {
                    out += renderer.text(token.text);
                    break;
                }
                default: {
                    var errMsg = 'Token with "' + token.type + '" type was not found.';
                    if (this.options.silent) {
                        console.error(errMsg);
                        return;
                    }
                    else {
                        throw new Error(errMsg);
                    }
                }
            }
        }
        return out;
    };
    return Parser;
}());
var merge$2 = helpers.merge, checkSanitizeDeprecation$1 = helpers.checkSanitizeDeprecation, escape$3 = helpers.escape;
var getDefaults = defaults.getDefaults, changeDefaults = defaults.changeDefaults, defaults$5 = defaults.defaults;
/**
 * Marked
 */
function marked(src, opt, callback) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
        throw new Error('marked(): input parameter is undefined or null');
    }
    if (typeof src !== 'string') {
        throw new Error('marked(): input parameter is of type '
            + Object.prototype.toString.call(src) + ', string expected');
    }
    if (callback || typeof opt === 'function') {
        if (!callback) {
            callback = opt;
            opt = null;
        }
        opt = merge$2({}, marked.defaults, opt || {});
        checkSanitizeDeprecation$1(opt);
        var highlight_1 = opt.highlight;
        var tokens_1, pending_1, i = 0;
        try {
            tokens_1 = Lexer_1.lex(src, opt);
        }
        catch (e) {
            return callback(e);
        }
        pending_1 = tokens_1.length;
        var done_1 = function (err) {
            if (err) {
                opt.highlight = highlight_1;
                return callback(err);
            }
            var out;
            try {
                out = Parser_1.parse(tokens_1, opt);
            }
            catch (e) {
                err = e;
            }
            opt.highlight = highlight_1;
            return err
                ? callback(err)
                : callback(null, out);
        };
        if (!highlight_1 || highlight_1.length < 3) {
            return done_1();
        }
        delete opt.highlight;
        if (!pending_1)
            return done_1();
        for (; i < tokens_1.length; i++) {
            (function (token) {
                if (token.type !== 'code') {
                    return --pending_1 || done_1();
                }
                return highlight_1(token.text, token.lang, function (err, code) {
                    if (err)
                        return done_1(err);
                    if (code == null || code === token.text) {
                        return --pending_1 || done_1();
                    }
                    token.text = code;
                    token.escaped = true;
                    --pending_1 || done_1();
                });
            })(tokens_1[i]);
        }
        return;
    }
    try {
        opt = merge$2({}, marked.defaults, opt || {});
        checkSanitizeDeprecation$1(opt);
        return Parser_1.parse(Lexer_1.lex(src, opt), opt);
    }
    catch (e) {
        e.message += '\nPlease report this to https://github.com/markedjs/marked.';
        if ((opt || marked.defaults).silent) {
            return '<p>An error occurred:</p><pre>'
                + escape$3(e.message + '', true)
                + '</pre>';
        }
        throw e;
    }
}
/**
 * Options
 */
marked.options =
    marked.setOptions = function (opt) {
        merge$2(marked.defaults, opt);
        changeDefaults(marked.defaults);
        return marked;
    };
marked.getDefaults = getDefaults;
marked.defaults = defaults$5;
/**
 * Use Extension
 */
marked.use = function (extension) {
    var opts = merge$2({}, extension);
    if (extension.renderer) {
        var renderer_1 = marked.defaults.renderer || new Renderer_1();
        var _loop_1 = function (prop) {
            var prevRenderer = renderer_1[prop];
            renderer_1[prop] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var ret = extension.renderer[prop].apply(renderer_1, args);
                if (ret === false) {
                    ret = prevRenderer.apply(renderer_1, args);
                }
                return ret;
            };
        };
        for (var prop in extension.renderer) {
            _loop_1(prop);
        }
        opts.renderer = renderer_1;
    }
    if (extension.tokenizer) {
        var tokenizer_1 = marked.defaults.tokenizer || new Tokenizer_1();
        var _loop_2 = function (prop) {
            var prevTokenizer = tokenizer_1[prop];
            tokenizer_1[prop] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var ret = extension.tokenizer[prop].apply(tokenizer_1, args);
                if (ret === false) {
                    ret = prevTokenizer.apply(tokenizer_1, args);
                }
                return ret;
            };
        };
        for (var prop in extension.tokenizer) {
            _loop_2(prop);
        }
        opts.tokenizer = tokenizer_1;
    }
    marked.setOptions(opts);
};
/**
 * Expose
 */
marked.Parser = Parser_1;
marked.parser = Parser_1.parse;
marked.Renderer = Renderer_1;
marked.TextRenderer = TextRenderer_1;
marked.Lexer = Lexer_1;
marked.lexer = Lexer_1.lex;
marked.Tokenizer = Tokenizer_1;
marked.Slugger = Slugger_1;
marked.parse = marked;
var marked_1 = marked;
var Sprachsynthese = /** @class */ (function () {
    function Sprachsynthese() {
        var _this = this;
        this.sprachSynthese = window.speechSynthesis;
        this.sprachSynthese.onvoiceschanged = function () {
            _this.voices = _this.sprachSynthese.getVoices();
            Logger.debugMessage("voices changed to: " + _this.voices.join(","));
        };
    }
    Sprachsynthese.prototype.getSynthese = function () {
        return this.sprachSynthese;
    };
    Sprachsynthese.prototype.getVoices = function () {
        Logger.infoMessage("call getVoices");
        if (!this.voices) {
            this.voices = this.sprachSynthese.getVoices();
        }
        return this.voices;
    };
    return Sprachsynthese;
}());
var HoneySlideshow = /** @class */ (function () {
    function HoneySlideshow(hostRef) {
        registerInstance(this, hostRef);
    }
    HoneySlideshow.prototype.getFileURLexternalForm = function (fileName) {
        if (this.baseurl.endsWith("/")) {
            return this.baseurl + fileName;
        }
        else {
            return this.baseurl + "/" + fileName;
        }
    };
    HoneySlideshow.prototype.getCurrentSlideURLExternalForm = function () {
        var slideNr = this.slide;
        var slideFileName = this.slides[slideNr];
        return this.getFileURLexternalForm(slideFileName);
    };
    HoneySlideshow.prototype.getVorleserCallbacks = function () {
        var _this = this;
        var callbacks = {};
        callbacks.onstart = function () {
            _this.isPlayingMode = true;
            _this.isPausierend = false;
            Logger.debugMessage("onstart");
        };
        callbacks.onpause = function () {
            _this.isPlayingMode = true;
            _this.isPausierend = true;
            Logger.debugMessage("onpause");
        };
        callbacks.onresume = function () {
            _this.isPlayingMode = true;
            _this.isPausierend = false;
            Logger.debugMessage("onresume");
        };
        callbacks.onend = function () {
            _this.isPlayingMode = false;
            _this.isPausierend = false;
            Logger.debugMessage("onend");
        };
        return callbacks;
    };
    // wird exakt einmal aufgerufen (wenn die Komponente das erste Mal in den DOM eingehängt wird)
    HoneySlideshow.prototype.componentWillLoad = function () {
        var sprachsynthese = new Sprachsynthese();
        this.sprachauswahl = new Sprachauswahl(sprachsynthese);
        this.sprachausgabe = new Sprachausgabe(sprachsynthese, this.sprachauswahl, this.getVorleserCallbacks());
        this.isPlayingMode = false;
        this.isPausierend = false;
        this.slide = 0;
        this.slides = [];
        this.tags = [];
        this.loadMetadata();
        marked_1.setOptions({
            baseUrl: this.baseurl
        });
    };
    HoneySlideshow.prototype.componentDidLoad = function () {
        Logger.debugMessage("componentDidLoad");
        var element = this.el;
        var playButton = element.shadowRoot.querySelector("#playbutton");
        /* Der Klick funktioniert nur wenn auf der Seite schon eine menschliche Interaktion stattfand.
         * Chrome ab 71
         * Firefox noch nicht -> wirkt immer :)
         * Quelle: https://www.chromestatus.com/feature/5687444770914304
         */
        playButton.click();
    };
    HoneySlideshow.prototype.printPageNum = function () {
        return "Folie\u00a0" + (this.slide + 1) + "/" + this.slides.length;
    };
    HoneySlideshow.prototype.playSlide = function () {
        Logger.debugMessage("Play slide" + this.baseurl + "/" + this.slides[this.slide]);
        this.loadAudioContent();
    };
    HoneySlideshow.prototype.loadMetadata = function () {
        var _this = this;
        var indexFile = this.getFileURLexternalForm("0index.txt");
        Fileloader.of(indexFile).getFileContent().subscribe(function (indexContent) {
            _this.slides = indexContent.split(',').map(function (value) { return value.trim(); });
            _this.loadSlideContent();
        });
        var tagsFile = this.getFileURLexternalForm("0tags.txt");
        Fileloader.of(tagsFile).getFileContent().subscribe(function (tagsContent) {
            _this.tags = tagsContent.split(',').map(function (value) { return value.trim(); });
        });
    };
    HoneySlideshow.prototype.loadAudioContent = function () {
        var _this = this;
        this.sprachausgabe.cancelSpeakingAndClearQueue();
        var audioFileName = this.getCurrentSlideURLExternalForm() + ".txt";
        var audioURL = new URL(audioFileName);
        Logger.infoMessage("audioURL: " + audioURL);
        var audioLoader = new Fileloader(audioURL);
        audioLoader.getFileContent().subscribe(function (audioContent) {
            _this.sprachausgabe.textVorlesen(audioContent);
        });
    };
    HoneySlideshow.prototype.loadSlideContent = function () {
        var slideFileName = this.getCurrentSlideURLExternalForm() + ".md";
        var slideURL = new URL(slideFileName);
        Logger.infoMessage("slideURL: " + slideURL);
        var slideLoader = new Fileloader(slideURL);
        slideLoader.getFileContent().subscribe(function (content) {
            Logger.infoMessage("MD Inhalt:\n" + content);
            var element = document.getElementById("slidewin");
            var htmlContent = marked_1(content);
            var sanifiedHtmlContent = new IonicSafeString(htmlContent).value;
            element.innerHTML = sanifiedHtmlContent;
        });
    };
    HoneySlideshow.prototype.loadSlide = function () {
        Logger.debugMessage("Lade Slide " + (this.slide + 1));
        this.loadSlideContent();
        this.loadAudioContent();
    };
    HoneySlideshow.prototype.isValidSlide = function (slideNr) {
        return slideNr > -1 && slideNr < (this.slides.length);
    };
    HoneySlideshow.prototype.moveToSlide = function (slideNr) {
        if (this.isValidSlide(slideNr)) {
            this.slide = slideNr;
            this.loadSlide();
        }
        else {
            alert("Invalid Slide -> no change");
        }
    };
    HoneySlideshow.prototype.handleStart = function (event) {
        this.moveToSlide(0);
    };
    HoneySlideshow.prototype.handleFastRewind = function (event) {
        this.moveToSlide(this.slide - 10);
    };
    HoneySlideshow.prototype.handleRewind = function (event) {
        this.moveToSlide(this.slide - 1);
    };
    HoneySlideshow.prototype.handlePause = function (event) {
        if (this.sprachausgabe.isPaused()) {
            this.sprachausgabe.resumeSpeakingFromQueue();
        }
        else {
            this.sprachausgabe.pauseSpeakingFromQueue();
        }
    };
    HoneySlideshow.prototype.handleStop = function (event) {
        this.sprachausgabe.cancelSpeakingAndClearQueue();
    };
    HoneySlideshow.prototype.handlePlay = function (event) {
        this.playSlide();
    };
    HoneySlideshow.prototype.handleForeward = function (event) {
        this.moveToSlide(this.slide + 1);
    };
    HoneySlideshow.prototype.handleFastForeward = function (event) {
        this.moveToSlide(this.slide + 10);
    };
    HoneySlideshow.prototype.handleEnd = function (event) {
        this.moveToSlide(this.slides.length - 1);
    };
    HoneySlideshow.prototype.render = function () {
        var _this = this;
        return (h("host", null, h("header", null, h("slot", { name: "title" }, "Platzhalter f\u00FCr den Titel der Pr\u00E4sentation"), h("div", { id: "taglist", class: "tag-container" }, this.tags.map(function (tag) { return h("span", { class: "tag-content" }, tag); }))), h("hr", { class: "hr-oben" }), h("div", { id: "slide-control", class: "flex-container" }, h("button", { onClick: function (event) { return _this.handleStart(event); }, disabled: this.slide < 1, class: "flex-content", title: "Zur ersten Folie", innerHTML: IMG_START }), h("button", { onClick: function (event) { return _this.handleFastRewind(event); }, disabled: (this.slide - 10) < 0, class: "flex-content", title: "10 Folien zurück", innerHTML: IMG_FASTREWIND }), h("button", { onClick: function (event) { return _this.handleRewind(event); }, disabled: (this.slide - 1) < 0, class: "flex-content", title: "1 Folie zurück", innerHTML: IMG_REWIND }), h("button", { onClick: function (event) { return _this.isPlayingMode && _this.isPausierend ? _this.handlePause(event) : _this.handlePlay(event); }, disabled: this.isPlayingMode && !this.isPausierend, id: "playbutton", class: "flex-content", title: this.isPlayingMode && this.isPausierend ? "Sprachausgabe fortsetzen" : "Vortrag beginnen lassen", innerHTML: IMG_PLAY }), h("button", { onClick: function (event) { return _this.handlePause(event); }, disabled: !this.isPlayingMode || this.isPausierend, class: "flex-content", title: "Sprachausgabe pausieren", innerHTML: IMG_PAUSE }), h("button", { onClick: function (event) { return _this.handleStop(event); }, disabled: !this.isPlayingMode, class: "flex-content", title: "Sprachausgabe beenden", innerHTML: IMG_STOP }), h("button", { onClick: function (event) { return _this.handleForeward(event); }, disabled: (this.slide + 1) > (this.slides.length - 1), class: "flex-content", title: "1 Folie weiter", innerHTML: IMG_FOREWARD }), h("button", { onClick: function (event) { return _this.handleFastForeward(event); }, disabled: (this.slide + 10) > (this.slides.length - 1), class: "flex-content", title: "10 Folien weiter", innerHTML: IMG_FASTFOREWARD }), h("button", { onClick: function (event) { return _this.handleEnd(event); }, disabled: this.slide >= (this.slides.length - 1), class: "flex-content", title: "Zur letzten Folie", innerHTML: IMG_END }), h("div", { id: "pagenum", title: this.printPageNum() }, this.printPageNum())), h("hr", { class: "hr-unten" }), h("main", null, h("div", null, "Quellen: ", h("a", { href: this.getCurrentSlideURLExternalForm() + ".md", target: "_blank", class: "quelle" }, "Folie"), h("a", { href: this.getCurrentSlideURLExternalForm() + ".txt", target: "_blank", class: "quelle" }, "Audio")), h("slot", { name: "slide-area" }))));
    };
    Object.defineProperty(HoneySlideshow, "assetsDirs", {
        get: function () { return ["assets"]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoneySlideshow.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoneySlideshow, "style", {
        get: function () { return ".flex-container{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;text-align:center;vertical-align:center}svg{height:20px;width:20px;margin-bottom:-5px}.flex-content{-ms-flex:1;flex:1;border:1px solid #00f;border-radius:6px;background-color:#0ff;-webkit-box-shadow:1px 1px #00f;box-shadow:1px 1px #00f}.tag-content{border:1px solid grey;border-radius:6px;background-color:#d3d3d3;-webkit-box-shadow:1px 1px grey;box-shadow:1px 1px grey;color:#000;text-shadow:1px 1px 3px #000;margin:0 2px 0 2px;padding:2px 2px 2px 2px}.quelle{margin-left:5px}#pagenum{-ms-flex:14;flex:14;border:1px solid #00f;border-radius:6px;background-color:beige;-webkit-box-shadow:1px 1px #00f;box-shadow:1px 1px #00f;padding-left:5px;text-align:left;text-shadow:1px 1px 5px #00008b}.hr-oben,.hr-unten{margin:3px 0 0 1px}button:disabled{background-color:#d3d3d3}"; },
        enumerable: true,
        configurable: true
    });
    return HoneySlideshow;
}());
export { HoneySlideshow as honey_slideshow };
