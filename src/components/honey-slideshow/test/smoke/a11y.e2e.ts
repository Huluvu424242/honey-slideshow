const {loadPage, AxePuppeteer} = require('axe-puppeteer')
const puppeteer = require('puppeteer')


describe('example', () => {
  xit('should test the a11y via axe with manually csp', async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setBypassCSP(true)

    await page.goto('https://dequeuniversity.com/demo/mars/')

    const results = await new AxePuppeteer(page).analyze()
    console.log(results)

    await page.close()
    await browser.close()
  });


  xit('should test the a11y via axe with auto csp', async () => {
    const browser = await puppeteer.launch()
    const axeBuilder = await loadPage(
      browser,
      'https://funthomas424242.github.io/foile-pile/evaluationen/community-tools/index.html'
    )
    const results = await axeBuilder.analyze()
    console.log(results)

    await browser.close()
  });

});
