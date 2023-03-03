'use strict';

/**
 * global-settiing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-settiing.global-settiing');
