import './core-df18ef15.js';
import './overlays-2dd70c20.js';
import './index-a78473ab.js';
import './animation-5cbe9b9d.js';
import './cubic-bezier-982e7b87.js';
import './index-7e4414a9.js';
import './utils-04ad467c.js';
import './ios.transition-b2304caa.js';
import './md.transition-bbc85ff3.js';
import './index-7dea1151.js';
import './index-17d6e33a.js';

const setupConfig = (config) => {
    const win = window;
    const Ionic = win.Ionic;
    if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
        console.error('ionic config was already initialized');
        return;
    }
    win.Ionic = win.Ionic || {};
    win.Ionic.config = Object.assign(Object.assign({}, win.Ionic.config), config);
    return win.Ionic.config;
};
const getMode = () => {
    const win = window;
    const config = win && win.Ionic && win.Ionic.config;
    if (config) {
        if (config.mode) {
            return config.mode;
        }
        else {
            return config.get('mode');
        }
    }
    return 'md';
};
