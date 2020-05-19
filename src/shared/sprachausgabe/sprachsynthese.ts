export class Sprachsynthese {
  static sprachSynthese: SpeechSynthesis = window.speechSynthesis;

  // voices: SpeechSynthesisVoice[];

  // constructor() {
  //   // this.sprachSynthese =  window.speechSynthesis;
  //   // this.sprachSynthese.onvoiceschanged = () => {
  //   //   if (!this.voices || this.voices.length < 1) {
  //   //     this.voices = this.sprachSynthese.getVoices();
  //   //     Logger.infoMessage("voices changed to: " + this.voices.join(","));
  //   //   } else {
  //   //     Logger.infoMessage("voices alraedy initialized");
  //   //   }
  //   // };
  // }

  public static getSynthese() {
    return this.sprachSynthese;
  }

  public static getVoices(): SpeechSynthesisVoice[] {
    return Sprachsynthese.sprachSynthese.getVoices();
  }
}
