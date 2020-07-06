import {HoneySlideshow} from '../../honey-slideshow';
import {newSpecPage} from "@stencil/core/testing";
import {Sprachsynthese} from "../../../../shared/sprachausgabe/sprachsynthese";

describe('beschreibung', () => {


  xit('should render my component', async () => {
    const page = await newSpecPage({
      components: [HoneySlideshow, Sprachsynthese],
      url: 'http://invalidURL.de',
      html: `<honey-slideshow baseURL="http://invalidURL.de"></honey-slideshow>`,
    });
    expect(page).not.toBeNull();
  });

  it('should render my component', async () => {
    const slideshow = new HoneySlideshow();
    expect(slideshow).not.toBeNull();
  });

});
