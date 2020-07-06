import {newE2EPage} from '@stencil/core/testing';

describe('example', () => {
  it('should render a foo-component', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<honey-slideshow id="designrules" baseurl="https://funthomas424242.github.io/foile-pile/evaluationen/community-tools/">
                <h2 slot="title">Evaluierung Community Tools</h2>
                <div id="slidewin" slot="slide-area" class="slides"></div>
            </honey-slideshow>`
    );
    const el = await page.find('honey-slideshow');
    expect(el).not.toBeNull();
    const elm = await page.find('honey-slideshow >>> #playbutton');
    expect(elm.getAttribute('title')).toEqualText('Vortrag beginnen lassen');
  });
});
