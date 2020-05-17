import {Subject} from "rxjs";


export class FileLoader {

  url: URL;

  constructor(url: URL) {
    this.url = url;
  }

  public getFileContent(): Subject<string> {
    const subject: Subject<string> = new Subject<string>()

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
