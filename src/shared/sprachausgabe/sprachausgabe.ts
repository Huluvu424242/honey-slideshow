import {Logger} from "../logging/logger";
import {Sprachauswahl} from "../stimmenauswahl/stimmenauswahl";
import {Sprachsynthese} from "./sprachsynthese";

export interface VorleserCallbacks {
  onend?: () => void;
  onstart?: () => void;
  onpause?: () => void;
  onresume?: () => void;
  onerror?: () => void;
}

export class Sprachausgabe {

  sprachSynthese: Sprachsynthese;
  sprachauswahl: Sprachauswahl;
  vorleserCallbacks: VorleserCallbacks;

  constructor(sprachSynthese: Sprachsynthese, sprachauswahl: Sprachauswahl, vorleserCallbacks?: VorleserCallbacks) {
    this.sprachSynthese = sprachSynthese;
    this.sprachauswahl = sprachauswahl;
    this.vorleserCallbacks = vorleserCallbacks;
    Logger.infoMessage("####constructor finished");
  }

  erzeugeVorleser(text: string): SpeechSynthesisUtterance {
    const vorleser: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(text);

    if (this.vorleserCallbacks) {
      vorleser.onend = () => {
        Logger.debugMessage("Vorlesen beendet");
        if (this.vorleserCallbacks.onend) {
          this.vorleserCallbacks.onend();
        }
      }

      vorleser.onstart = () => {
        Logger.debugMessage("Vorlesen gestartet");
        if (this.vorleserCallbacks.onstart) {
          this.vorleserCallbacks.onstart();
        }
      }

      vorleser.onpause = () => {
        Logger.debugMessage("Pause mit Vorlesen");
        if (this.vorleserCallbacks.onpause) {
          this.vorleserCallbacks.onpause();
        }
      }

      vorleser.onresume = () => {
        Logger.debugMessage("Fortsetzen des Vorlesen");
        if (this.vorleserCallbacks.onresume) {
          this.vorleserCallbacks.onresume();
        }
      }

      vorleser.onerror = () => {
        Logger.errorMessage("Fehler beim Vorlesen");
        if (this.vorleserCallbacks.onerror) {
          this.vorleserCallbacks.onerror();
        }
      }
    }
    this.initialisiereVorleserStimme(vorleser);

    return vorleser;
  }

  initialisiereVorleserStimme(vorleser: SpeechSynthesisUtterance) {
    Logger.infoMessage("erzeugeVorleser started");

    vorleser.pitch = this.sprachauswahl.getPitch();
    vorleser.rate = this.sprachauswahl.getRate();
    vorleser.volume = this.sprachauswahl.getVolume();
    vorleser.voice = this.sprachauswahl.getVoice();
    if (vorleser.voice && vorleser.voice.lang) {
      vorleser.lang = vorleser.voice.lang;
    } else {
      vorleser.lang = "de-DE";
    }
  }

  textVorlesen(zuLesenderText: string) {
    if (zuLesenderText) {
      const texte: string[] = zuLesenderText.match(/(\S+[\s.]){1,20}/g);

      texte.forEach(text => {
          const vorleser: SpeechSynthesisUtterance = this.erzeugeVorleser(text);
          Logger.infoMessage("speaker lang used:" + vorleser.lang);
          if (vorleser.voice) {
            Logger.infoMessage("speaker voice used:" + vorleser.voice.name);
            Logger.infoMessage("speaker voice lang:" + vorleser.voice.lang);
          } else {
            Logger.infoMessage("no voice matched for text: " + zuLesenderText);
          }
          this.sprachSynthese.getSynthese().speak(vorleser);
        }
      );

    }
  }

  cancelSpeakingAndClearQueue(): void {
    this.sprachSynthese.getSynthese().cancel();
  }

  pauseSpeakingFromQueue(): void {
    this.sprachSynthese.getSynthese().pause();
  }

  resumeSpeakingFromQueue(): void {
    this.sprachSynthese.getSynthese().resume();
  }

  isPaused(): boolean {
    return this.sprachSynthese.getSynthese().paused;
  }
}


