//
// jest.mock('../../../../shared/sprachausgabe/window', () => ({
//   getSpeechSynthesis: () => {
//     return {
//       "onvoiceschanged": () => {},
//       "getVoices": () =>{return [{}];}
//     };
//   },
//   getXMLHttpRequest: () =>{
//     return {
//       "addEventListener": () => {
//       }
//     }
//   }
// }));


jest.mock('../../../../shared/sprachausgabe/sprachsynthese');
jest.mock('../../../../shared/sprachausgabe/sprachausgabe');
jest.mock('../../../../shared/commons/objectfactory');

import {HoneySlideshow} from "../../honey-slideshow";
import {ObjectFactory} from "../../../../shared/commons/objectfactory";
import {Sprachsynthese} from "../../../../shared/sprachausgabe/sprachsynthese";
import {Sprachausgabe} from "../../../../shared/sprachausgabe/sprachausgabe";
import {Sprachauswahl} from "../../../../shared/stimmenauswahl/stimmenauswahl";
import {newSpecPage, SpecPage} from "@stencil/core/testing";


describe('Spec Page example', () => {


  beforeEach(async () => {
    Sprachsynthese.prototype.getVoices = jest.fn().mockImplementation(() => {
      return [{}];
    });
    ObjectFactory.getXMLHttpRequest = jest.fn().mockImplementation(() => {
      return {
        "addEventListener": () => {
        }
      };
    });
  });


  it('should reflect the attribute values into the properties', async () => {

    // jest.mock('Fileloader');
    // Fileloader.of('http://test.org').loadFile().mockResolvedValue();

    const page: SpecPage = await newSpecPage(
      {
        components: [HoneySlideshow],
        supportsShadowDom: true,
        html: `<honey-slideshow id="designrules"
                              baseurl="https://huluvu424242.github.io/foile-pile/evaluationen/community-tools/"
                              slidelist="slide7, slide8,slide9 , slideX ,slide3"
                              taglist="blah,blup,blurp"
                              markedoptions='{"dudel":"drei"}'
                              >

                <h2 slot="title">Evaluierung Community Tools</h2>
                <div id="slidewin" slot="slide-area" class="slides"></div>
            </honey-slideshow>`
      });

    const componentInstance = page.rootInstance;
    console.log(componentInstance.toString());


    // expect(el).not.toBeNull();

    // expect(el.getAttribute("tags")).toBe(["hulu"]);

    // let elm = await page.find('honey-slideshow >>> #startpos');
    // expect(elm.getAttribute('title')).toEqualText('Zur ersten Folie');
    //
    // elm = await page.find('honey-slideshow >>> #endpos');
    // expect(elm.getAttribute('title')).toEqualText('Zur letzten Folie');
    //
    //  elm = await page.find('honey-slideshow >>> #playbutton');
    // expect(elm.getAttribute('title')).toEqualText('Vortrag beginnen lassen');

  });


  xit('should reflect the attribute values into the properties', async () => {
    const page = await newSpecPage({
      components: [HoneySlideshow],
      url: 'http://invalidURL.de',
      html: `<honey-slideshow   id="designrules"
                                baseurl="https://huluvu424242.github.io/foile-pile/evaluationen/community-tools/"
                                slidelist="slide7, slide8,slide9 , slideX ,slide3"
                                taglist="blah,blup,blurp"
                                markedoptions='{dudel:"drei"}'
                                taglist="blah,blup,blurp"></honey-slideshow>`,
      context: {
        sprachauswahl: Sprachauswahl,
        sprachausgabe: Sprachausgabe,
        sprachSynthese: window.speechSynthesis
      },
    });
    expect(page).not.toBeNull();
  });

});
