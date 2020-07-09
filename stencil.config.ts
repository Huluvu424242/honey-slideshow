import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'honey-slideshow',
  globalStyle:  'src/global/global.css',
  outputTargets: [
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'docs-json',
      file: 'src/components/honey-slideshow/custom-elements.json'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
