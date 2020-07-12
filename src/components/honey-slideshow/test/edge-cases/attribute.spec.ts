import {HoneySlideshow} from '../../honey-slideshow';
import {newSpecPage} from "@stencil/core/testing";
import {Sprachauswahl} from "../../../../shared/stimmenauswahl/stimmenauswahl";
import {Sprachausgabe} from "../../../../shared/sprachausgabe/sprachausgabe";

describe('beschreibung', () => {


  xit('should render my component', async () => {
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
