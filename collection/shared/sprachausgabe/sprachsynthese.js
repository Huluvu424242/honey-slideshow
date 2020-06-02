import { Logger } from "../logging/logger";
export class Sprachsynthese {
    constructor() {
        this.sprachSynthese = window.speechSynthesis;
        this.sprachSynthese.onvoiceschanged = () => {
            this.voices = this.sprachSynthese.getVoices();
            Logger.debugMessage("voices changed to: " + this.voices.join(","));
        };
    }
    getSynthese() {
        return this.sprachSynthese;
    }
    getVoices() {
        Logger.infoMessage("call getVoices");
        if (!this.voices) {
            this.voices = this.sprachSynthese.getVoices();
        }
        return this.voices;
    }
}
