import { newE2EPage } from '@stencil/core/testing';

describe('edge cases', () => {
  xit('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<honey-slideshow></honey-slideshow>');
    const element = await page.find('honey-slideshow');
    expect(element).toHaveClass('hydrated');
  });

  xit('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<honey-slideshow></honey-slideshow>');
    const component = await page.find('honey-slideshow');
    const element = await page.find('honey-slideshow >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
