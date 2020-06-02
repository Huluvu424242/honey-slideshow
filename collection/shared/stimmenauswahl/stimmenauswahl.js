import { Logger } from "../../shared/logging/logger";
export class Sprachauswahl {
    constructor(sprachsynthese) {
        Logger.infoMessage("create Sprachauswahl");
        this.sprachSynthese = sprachsynthese;
        this.rate = 1;
        this.volume = 1;
        this.pitch = 1;
        this.initDefaultStimme();
    }
    initDefaultStimme() {
        const voices = this.sprachSynthese.getVoices();
        if (!voices) {
            const voicesRetry = this.sprachSynthese.getVoices();
            this.voice = voicesRetry[0];
        }
        else {
            this.voice = voices[0];
        }
    }
    getRate() {
        return this.rate;
    }
    getVolume() {
        return this.volume;
    }
    getPitch() {
        return this.pitch;
    }
    getVoice() {
        return this.voice;
    }
    getVoiceList() {
        return this.sprachSynthese.getVoices();
    }
    setChoosenVoice(voice) {
        this.voice = voice;
    }
    setVolume(volume) {
        this.volume = volume;
    }
    setRate(rate) {
        this.rate = rate;
    }
    setPitch(pitch) {
        this.pitch = pitch;
    }
}
