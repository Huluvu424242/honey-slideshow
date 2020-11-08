import {newE2EPage} from '@stencil/core/testing';
import {E2EPage} from "@stencil/core/testing/puppeteer/puppeteer-declarations";

describe('example', () => {

  let page: E2EPage;


  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(
      `<honey-slideshow id="designrules" baseurl="https://huluvu424242.github.io/foile-pile/evaluationen/community-tools/">
                <h2 slot="title">Evaluierung Community Tools</h2>
                <div id="slidewin" slot="slide-area" class="slides"></div>
            </honey-slideshow>`
    );
  });

  it('should show all navigation buttons', async () => {

    const el = await page.find('honey-slideshow');
    expect(el).not.toBeNull();

    let elm = await page.find('honey-slideshow >>> #startpos');
    expect(elm.getAttribute('title')).toEqualText('Zur ersten Folie');

    elm = await page.find('honey-slideshow >>> #endpos');
    expect(elm.getAttribute('title')).toEqualText('Zur letzten Folie');

     elm = await page.find('honey-slideshow >>> #playbutton');
    expect(elm.getAttribute('title')).toEqualText('Vortrag beginnen lassen');

  });
});
