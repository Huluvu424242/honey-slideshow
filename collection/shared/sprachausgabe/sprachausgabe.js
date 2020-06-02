import { Logger } from "../logging/logger";
export class Sprachausgabe {
    constructor(sprachSynthese, sprachauswahl, vorleserCallbacks) {
        this.sprachSynthese = sprachSynthese;
        this.sprachauswahl = sprachauswahl;
        this.vorleserCallbacks = vorleserCallbacks;
        Logger.infoMessage("####constructor finished");
    }
    erzeugeVorleser(text) {
        const vorleser = new SpeechSynthesisUtterance(text);
        if (this.vorleserCallbacks) {
            vorleser.onend = () => {
                Logger.debugMessage("Vorlesen beendet");
                if (this.vorleserCallbacks.onend) {
                    this.vorleserCallbacks.onend();
                }
            };
            vorleser.onstart = () => {
                Logger.debugMessage("Vorlesen gestartet");
                if (this.vorleserCallbacks.onstart) {
                    this.vorleserCallbacks.onstart();
                }
            };
            vorleser.onpause = () => {
                Logger.debugMessage("Pause mit Vorlesen");
                if (this.vorleserCallbacks.onpause) {
                    this.vorleserCallbacks.onpause();
                }
            };
            vorleser.onresume = () => {
                Logger.debugMessage("Fortsetzen des Vorlesen");
                if (this.vorleserCallbacks.onresume) {
                    this.vorleserCallbacks.onresume();
                }
            };
            vorleser.onerror = () => {
                Logger.errorMessage("Fehler beim Vorlesen");
                if (this.vorleserCallbacks.onerror) {
                    this.vorleserCallbacks.onerror();
                }
            };
        }
        this.initialisiereVorleserStimme(vorleser);
        return vorleser;
    }
    initialisiereVorleserStimme(vorleser) {
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
    }
    textVorlesen(zuLesenderText) {
        if (zuLesenderText) {
            const texte = zuLesenderText.match(/(\S+\s){1,20}/g);
            texte.forEach(text => {
                const vorleser = this.erzeugeVorleser(text);
                Logger.infoMessage("speaker lang used:" + vorleser.lang);
                if (vorleser.voice) {
                    Logger.infoMessage("speaker voice used:" + vorleser.voice.name);
                    Logger.infoMessage("speaker voice lang:" + vorleser.voice.lang);
                }
                else {
                    Logger.infoMessage("no voice matched for text: " + zuLesenderText);
                }
                this.sprachSynthese.getSynthese().speak(vorleser);
            });
        }
    }
    cancelSpeakingAndClearQueue() {
        this.sprachSynthese.getSynthese().cancel();
    }
    pauseSpeakingFromQueue() {
        this.sprachSynthese.getSynthese().pause();
    }
    resumeSpeakingFromQueue() {
        this.sprachSynthese.getSynthese().resume();
    }
    isPaused() {
        return this.sprachSynthese.getSynthese().paused;
    }
}
