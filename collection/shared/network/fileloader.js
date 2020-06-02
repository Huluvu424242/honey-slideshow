import { Subject } from "rxjs";
export class Fileloader {
    constructor(fileURL) {
        this.url = fileURL;
    }
    static of(fileURL) {
        return new Fileloader(new URL(fileURL));
    }
    getFileContent() {
        const subject = new Subject();
        const client = new XMLHttpRequest();
        client.addEventListener("load", (event) => {
            console.log(event.total + " bytes gelesen.");
            subject.next(client.responseText);
        });
        // client.onloadend = function(pe) {
        //   progressBar.value = pe.loaded
        // }
        client.open("GET", this.url.toString());
        client.send();
        return subject;
    }
}
