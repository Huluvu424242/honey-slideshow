import {Logger} from "../../shared/logging/logger";
import {Sprachsynthese} from "../../shared/sprachausgabe/sprachsynthese";

export class Sprachauswahl {

  sprachSynthese: Sprachsynthese;
  voice: SpeechSynthesisVoice;
  rate: number;
  volume: number;
  pitch: number;

  constructor(sprachsynthese: Sprachsynthese) {
    Logger.infoMessage("create Sprachauswahl");
    this.sprachSynthese = sprachsynthese;
    this.rate = 1;
    this.volume = 1;
    this.pitch = 1;
    this.initDefaultStimme();
  }

  protected initDefaultStimme(): void {
    const voices = this.sprachSynthese.getVoices();
    if (!voices) {
      const voicesRetry = this.sprachSynthese.getVoices();
      this.voice = voicesRetry[0];
    } else {
      this.voice = voices[0];
    }
  }

  public getRate(): number {
    return this.rate;
  }

  public getVolume(): number {
    return this.volume;
  }

  public getPitch(): number {
    return this.pitch;
  }

  public getVoice(): SpeechSynthesisVoice {
    return this.voice;
  }

  public getVoiceList(): SpeechSynthesisVoice[] {
    return this.sprachSynthese.getVoices();
  }

  public setChoosenVoice(voice: SpeechSynthesisVoice) {
    this.voice = voice;
  }

  public setVolume(volume: number) {
    this.volume = volume;
  }

  public setRate(rate: number) {
    this.rate = rate;
  }

  public setPitch(pitch: number) {
    this.pitch = pitch;
  }
}
