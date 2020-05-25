import {Logger} from "../logging/logger";
import {Sprachauswahl} from "../stimmenauswahl/stimmenauswahl";
import {Sprachsynthese} from "./sprachsynthese";


export class Sprachausgabe {

  sprachSynthese: Sprachsynthese;
  sprachauswahl: Sprachauswahl;

  constructor(sprachSynthese: Sprachsynthese, sprachauswahl: Sprachauswahl) {
    this.sprachSynthese = sprachSynthese;
    this.sprachauswahl = sprachauswahl;
    Logger.infoMessage("####constructor finished");
  }

  erzeugeVorleser(text: string): SpeechSynthesisUtterance {
    Logger.infoMessage("erzeugeVorleser started");
    const vorleser: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(text);

    vorleser.onend = () => {
      // this.speakerFinished.emit();
      Logger.debugMessage("Vorlesen beendet");
    }

    vorleser.onstart = () => {
      // this.speakerStarted.emit();
      Logger.debugMessage("Vorlesen gestartet");
    }

    vorleser.onpause = () => {
      // this.speakerPaused.emit();
      Logger.debugMessage("Pause mit Vorlesen");
    }

    vorleser.onerror = () => {
      // this.speakerFailed.emit();
      Logger.errorMessage("Fehler beim Vorlesen");
    }

    vorleser.pitch = this.sprachauswahl.getPitch();
    vorleser.rate = this.sprachauswahl.getRate();
    vorleser.volume = this.sprachauswahl.getVolume();
    vorleser.voice = this.sprachauswahl.getVoice();
    if (vorleser.voice && vorleser.voice.lang) {
      vorleser.lang = vorleser.voice.lang;
    } else {
      vorleser.lang = "de-DE";
    }
    return vorleser;
  }

  textVorlesen(zuLesenderText: string) {
    // if (!this.stimme) {
    //   this.stimme = this.getDefaultStimme();
    //   Logger.infoMessage("set default voice to " + this.stimme);
    // }
    if (zuLesenderText) {
      const texte: string[] = zuLesenderText.match(/(\S+\s){1,20}/g);

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

}


