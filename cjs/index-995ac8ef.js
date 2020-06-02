'use strict';

require('./core-0a098097.js');
require('./overlays-21fbeaca.js');
require('./index-d481847b.js');
require('./animation-8a037437.js');
require('./cubic-bezier-1afb948c.js');
require('./index-5995c544.js');
require('./utils-96effb26.js');
require('./ios.transition-683d6927.js');
require('./md.transition-bac5b6a8.js');
require('./index-2504963a.js');
require('./index-419c7ea6.js');

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
