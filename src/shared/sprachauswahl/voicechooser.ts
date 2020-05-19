import {Logger} from "../../shared/logging/logger";
import{Sprachsynthese} from "../../shared/sprachausgabe/sprachsynthese";

export class Sprachauswahl {

  voice: SpeechSynthesisVoice;
  rate: number;
  volume: number;
  pitch: number;

  constructor(){
      Logger.infoMessage("create Sprachauswahl");
      this.rate=1;
      this.volume=1;
      this.pitch=1;
      Sprachsynthese.getVoices();
      this.voice = this.getDefaultStimme();
  }

  protected getDefaultStimme(): SpeechSynthesisVoice {
      const voices = Sprachsynthese.getVoices();
      if(!voices) return null;
      return voices[0];
  }

  public getRate():number{
    return this.rate;
  }

  public getVolume():number{
    return this.volume;
  }

  public getPitch():number{
    return this.pitch;
  }

  public getVoice(): SpeechSynthesisVoice{
    return this.voice;
  }

  public getVoiceList(): SpeechSynthesisVoice[]{
    return Sprachsynthese.getVoices();
  }

  public setChoosenVoice( voice: SpeechSynthesisVoice){
    this.voice = voice;
  }

  public setVolume( volume:number){
    this.volume = volume;
  }

  public setRate( rate:number){
    this.rate = rate;
  }

  public setPitch( pitch: number){
    this.pitch = pitch;
  }
}
