import {Logger} from "../logging/logger";
import {ObjectFactory} from "../commons/objectfactory";



export class Sprachsynthese {
  sprachSynthese: SpeechSynthesis = ObjectFactory.getSpeechSynthesis();
  voices: SpeechSynthesisVoice[];

  constructor() {
    this.sprachSynthese.onvoiceschanged = () => {
      this.voices = this.sprachSynthese.getVoices();
      Logger.debugMessage("voices changed to: " + this.voices.join(","));
    };
  }

  public getSynthese() {
    return this.sprachSynthese;
  }

  public getVoices(): SpeechSynthesisVoice[] {
    Logger.infoMessage("call getVoices");
    if (!this.voices) {
      this.voices = this.sprachSynthese.getVoices();
    }
    return this.voices;
  }
}
