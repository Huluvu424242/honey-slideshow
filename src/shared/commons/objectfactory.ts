export class ObjectFactory {

  public static getSpeechSynthesis() :SpeechSynthesis{
    return window.speechSynthesis;
  }

  public static getXMLHttpRequest():XMLHttpRequest {
    return new XMLHttpRequest();
  }
}
