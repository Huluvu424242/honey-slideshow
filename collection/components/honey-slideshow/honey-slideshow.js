import { h } from "@stencil/core";
import { IMG_END, IMG_FASTFOREWARD, IMG_FASTREWIND, IMG_FOREWARD, IMG_PAUSE, IMG_PLAY, IMG_REWIND, IMG_START, IMG_STOP } from "./icon-constants";
import { Sprachausgabe } from "../../shared/sprachausgabe/sprachausgabe";
import { Sprachauswahl } from "../../shared/stimmenauswahl/stimmenauswahl";
import { Logger } from "../../shared/logging/logger";
import { Fileloader } from "../../shared/network/fileloader";
import marked from "marked";
import { IonicSafeString } from "@ionic/core";
import { Sprachsynthese } from "../../shared/sprachausgabe/sprachsynthese";
export class HoneySlideshow {
    getFileURLexternalForm(fileName) {
        if (this.baseurl.endsWith("/")) {
            return this.baseurl + fileName;
        }
        else {
            return this.baseurl + "/" + fileName;
        }
    }
    getCurrentSlideURLExternalForm() {
        const slideNr = this.slide;
        const slideFileName = this.slides[slideNr];
        return this.getFileURLexternalForm(slideFileName);
    }
    getVorleserCallbacks() {
        const callbacks = {};
        callbacks.onstart = () => {
            this.isPlayingMode = true;
            this.isPausierend = false;
            Logger.debugMessage("onstart");
        };
        callbacks.onpause = () => {
            this.isPlayingMode = true;
            this.isPausierend = true;
            Logger.debugMessage("onpause");
        };
        callbacks.onresume = () => {
            this.isPlayingMode = true;
            this.isPausierend = false;
            Logger.debugMessage("onresume");
        };
        callbacks.onend = () => {
            this.isPlayingMode = false;
            this.isPausierend = false;
            Logger.debugMessage("onend");
        };
        return callbacks;
    }
    // wird exakt einmal aufgerufen (wenn die Komponente das erste Mal in den DOM eingehängt wird)
    componentWillLoad() {
        const sprachsynthese = new Sprachsynthese();
        this.sprachauswahl = new Sprachauswahl(sprachsynthese);
        this.sprachausgabe = new Sprachausgabe(sprachsynthese, this.sprachauswahl, this.getVorleserCallbacks());
        this.isPlayingMode = false;
        this.isPausierend = false;
        this.slide = 0;
        this.slides = [];
        this.tags = [];
        this.loadMetadata();
        marked.setOptions({
            baseUrl: this.baseurl
        });
    }
    componentDidLoad() {
        Logger.debugMessage("componentDidLoad");
        const element = this.el;
        const playButton = element.shadowRoot.querySelector("#playbutton");
        /* Der Klick funktioniert nur wenn auf der Seite schon eine menschliche Interaktion stattfand.
         * Chrome ab 71
         * Firefox noch nicht -> wirkt immer :)
         * Quelle: https://www.chromestatus.com/feature/5687444770914304
         */
        playButton.click();
    }
    printPageNum() {
        return "Folie\u00a0" + (this.slide + 1) + "/" + this.slides.length;
    }
    playSlide() {
        Logger.debugMessage("Play slide" + this.baseurl + "/" + this.slides[this.slide]);
        this.loadAudioContent();
    }
    loadMetadata() {
        const indexFile = this.getFileURLexternalForm("0index.txt");
        Fileloader.of(indexFile).getFileContent().subscribe((indexContent) => {
            this.slides = indexContent.split(',').map(value => value.trim());
            this.loadSlideContent();
        });
        const tagsFile = this.getFileURLexternalForm("0tags.txt");
        Fileloader.of(tagsFile).getFileContent().subscribe((tagsContent) => {
            this.tags = tagsContent.split(',').map(value => value.trim());
        });
    }
    loadAudioContent() {
        this.sprachausgabe.cancelSpeakingAndClearQueue();
        const audioFileName = this.getCurrentSlideURLExternalForm() + ".txt";
        const audioURL = new URL(audioFileName);
        Logger.infoMessage("audioURL: " + audioURL);
        const audioLoader = new Fileloader(audioURL);
        audioLoader.getFileContent().subscribe(audioContent => {
            this.sprachausgabe.textVorlesen(audioContent);
        });
    }
    loadSlideContent() {
        const slideFileName = this.getCurrentSlideURLExternalForm() + ".md";
        const slideURL = new URL(slideFileName);
        Logger.infoMessage("slideURL: " + slideURL);
        const slideLoader = new Fileloader(slideURL);
        slideLoader.getFileContent().subscribe(content => {
            Logger.infoMessage("MD Inhalt:\n" + content);
            const element = document.getElementById("slidewin");
            const htmlContent = marked(content);
            const sanifiedHtmlContent = new IonicSafeString(htmlContent).value;
            element.innerHTML = sanifiedHtmlContent;
        });
    }
    loadSlide() {
        Logger.debugMessage("Lade Slide " + (this.slide + 1));
        this.loadSlideContent();
        this.loadAudioContent();
    }
    isValidSlide(slideNr) {
        return slideNr > -1 && slideNr < (this.slides.length);
    }
    moveToSlide(slideNr) {
        if (this.isValidSlide(slideNr)) {
            this.slide = slideNr;
            this.loadSlide();
        }
        else {
            alert("Invalid Slide -> no change");
        }
    }
    handleStart(event) {
        event.target;
        this.moveToSlide(0);
    }
    handleFastRewind(event) {
        event.target;
        this.moveToSlide(this.slide - 10);
    }
    handleRewind(event) {
        event.target;
        this.moveToSlide(this.slide - 1);
    }
    handlePause(event) {
        event.target;
        if (this.sprachausgabe.isPaused()) {
            this.sprachausgabe.resumeSpeakingFromQueue();
        }
        else {
            this.sprachausgabe.pauseSpeakingFromQueue();
        }
    }
    handleStop(event) {
        event.target;
        this.sprachausgabe.cancelSpeakingAndClearQueue();
    }
    handlePlay(event) {
        event.target;
        this.playSlide();
    }
    handleForeward(event) {
        event.target;
        this.moveToSlide(this.slide + 1);
    }
    handleFastForeward(event) {
        event.target;
        this.moveToSlide(this.slide + 10);
    }
    handleEnd(event) {
        event.target;
        this.moveToSlide(this.slides.length - 1);
    }
    render() {
        return (h("host", null,
            h("header", null,
                h("slot", { name: "title" }, "Platzhalter f\u00FCr den Titel der Pr\u00E4sentation"),
                h("div", { id: "taglist", class: "tag-container" }, this.tags.map((tag) => h("span", { class: "tag-content" }, tag)))),
            h("hr", { class: "hr-oben" }),
            h("div", { id: "slide-control", class: "flex-container" },
                h("button", { onClick: (event) => this.handleStart(event), disabled: this.slide < 1, class: "flex-content", title: "Zur ersten Folie", innerHTML: IMG_START }),
                h("button", { onClick: (event) => this.handleFastRewind(event), disabled: (this.slide - 10) < 0, class: "flex-content", title: "10 Folien zurück", innerHTML: IMG_FASTREWIND }),
                h("button", { onClick: (event) => this.handleRewind(event), disabled: (this.slide - 1) < 0, class: "flex-content", title: "1 Folie zurück", innerHTML: IMG_REWIND }),
                h("button", { onClick: (event) => this.isPlayingMode && this.isPausierend ? this.handlePause(event) : this.handlePlay(event), disabled: this.isPlayingMode && !this.isPausierend, id: "playbutton", class: "flex-content", title: this.isPlayingMode && this.isPausierend ? "Sprachausgabe fortsetzen" : "Vortrag beginnen lassen", innerHTML: IMG_PLAY }),
                h("button", { onClick: (event) => this.handlePause(event), disabled: !this.isPlayingMode || this.isPausierend, class: "flex-content", title: "Sprachausgabe pausieren", innerHTML: IMG_PAUSE }),
                h("button", { onClick: (event) => this.handleStop(event), disabled: !this.isPlayingMode, class: "flex-content", title: "Sprachausgabe beenden", innerHTML: IMG_STOP }),
                h("button", { onClick: (event) => this.handleForeward(event), disabled: (this.slide + 1) > (this.slides.length - 1), class: "flex-content", title: "1 Folie weiter", innerHTML: IMG_FOREWARD }),
                h("button", { onClick: (event) => this.handleFastForeward(event), disabled: (this.slide + 10) > (this.slides.length - 1), class: "flex-content", title: "10 Folien weiter", innerHTML: IMG_FASTFOREWARD }),
                h("button", { onClick: (event) => this.handleEnd(event), disabled: this.slide >= (this.slides.length - 1), class: "flex-content", title: "Zur letzten Folie", innerHTML: IMG_END }),
                h("div", { id: "pagenum", title: this.printPageNum() }, this.printPageNum())),
            h("hr", { class: "hr-unten" }),
            h("main", null,
                h("div", null,
                    "Quellen: ",
                    h("a", { href: this.getCurrentSlideURLExternalForm() + ".md", target: "_blank", class: "quelle" }, "Folie"),
                    h("a", { href: this.getCurrentSlideURLExternalForm() + ".txt", target: "_blank", class: "quelle" }, "Audio")),
                h("slot", { name: "slide-area" }))));
    }
    static get is() { return "honey-slideshow"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["honey-slideshow.css"]
    }; }
    static get styleUrls() { return {
        "$": ["honey-slideshow.css"]
    }; }
    static get assetsDirs() { return ["assets"]; }
    static get properties() { return {
        "baseurl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "baseurl",
            "reflect": false
        }
    }; }
    static get states() { return {
        "tags": {},
        "slides": {},
        "slide": {},
        "isPlayingMode": {},
        "isPausierend": {}
    }; }
    static get elementRef() { return "el"; }
}
