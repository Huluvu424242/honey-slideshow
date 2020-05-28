import {Subject} from "rxjs";


export class Fileloader {

  url: URL;

  constructor(fileURL: URL) {
    this.url = fileURL;
  }

  public static of(fileURL: string) {
    return new Fileloader(new URL(fileURL));
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
