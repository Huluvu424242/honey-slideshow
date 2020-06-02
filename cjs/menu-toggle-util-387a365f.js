'use strict';

const index$3 = require('./index-bfd387ca.js');

// Given a menu, return whether or not the menu toggle should be visible
const updateVisibility = async (menu) => {
    const menuEl = await index$3.menuController.get(menu);
    return !!(menuEl && await menuEl.isActive());
};

exports.updateVisibility = updateVisibility;
