'use strict';

const index$4 = require('./index-419c7ea6.js');

// Given a menu, return whether or not the menu toggle should be visible
const updateVisibility = async (menu) => {
    const menuEl = await index$4.menuController.get(menu);
    return !!(menuEl && await menuEl.isActive());
};

exports.updateVisibility = updateVisibility;
