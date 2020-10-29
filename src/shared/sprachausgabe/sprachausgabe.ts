import {Logger} from "../logging/logger";
import {Sprachauswahl} from "../stimmenauswahl/stimmenauswahl";
import {Sprachsynthese} from "./sprachsynthese";

export interface VorleserCallback {
  onend?: () => void;
  onstart?: () => void;
  onpause?: () => void;
  onresume?: () => void;
  onerror?: () => void;
}

export class Sprachausgabe {

  protected sprachSynthese: Sprachsynthese;
  protected sprachauswahl: Sprachauswahl;
  protected vorleserCallback: VorleserCallback;

  constructor(sprachSynthese: Sprachsynthese, sprachauswahl: Sprachauswahl, vorleserCallback?: VorleserCallback) {
    this.sprachSynthese = sprachSynthese;
    this.sprachauswahl = sprachauswahl;
    this.vorleserCallback = vorleserCallback;
    Logger.infoMessage("####constructor finished");
  }


  protected initialisiereVorleserStimme(vorleser: SpeechSynthesisUtterance) {
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

  protected erzeugeVorleser(text: string): SpeechSynthesisUtterance {
    const vorleser: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(text);

    if (this.vorleserCallback) {
      vorleser.onend = () => {
        Logger.debugMessage("Vorlesen beendet");
        if (this.vorleserCallback.onend) {
          this.vorleserCallback.onend();
        }
      }

      vorleser.onstart = () => {
        Logger.debugMessage("Vorlesen gestartet");
        if (this.vorleserCallback.onstart) {
          this.vorleserCallback.onstart();
        }
      }

      vorleser.onpause = () => {
        Logger.debugMessage("Pause mit Vorlesen");
        if (this.vorleserCallback.onpause) {
          this.vorleserCallback.onpause();
        }
      }

      vorleser.onresume = () => {
        Logger.debugMessage("Fortsetzen des Vorlesen");
        if (this.vorleserCallback.onresume) {
          this.vorleserCallback.onresume();
        }
      }

      vorleser.onerror = () => {
        Logger.errorMessage("Fehler beim Vorlesen");
        if (this.vorleserCallback.onerror) {
          this.vorleserCallback.onerror();
        }
      }
    }
    this.initialisiereVorleserStimme(vorleser);

    return vorleser;
  }


  public textVorlesen(zuLesenderText: string) {
    if (zuLesenderText) {
      // Auftrennung in Textblöcken nach Sprachen.
      // const texte: string[] = zuLesenderText.match(/(\S+[\s.]){1,20}/g);
      const texte: string[] = [zuLesenderText];

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

  public cancelSpeakingAndClearQueue(): void {
    this.sprachSynthese.getSynthese().cancel();
  }

  public pauseSpeakingFromQueue(): void {
    this.sprachSynthese.getSynthese().pause();
  }

  public resumeSpeakingFromQueue(): void {
    this.sprachSynthese.getSynthese().resume();
  }

  public isPaused(): boolean {
    return this.sprachSynthese.getSynthese().paused;
  }
}


