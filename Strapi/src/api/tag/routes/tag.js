'use strict';

/**
 * tag router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tag.tag',{
  prefix: '',
//   only: ['find', 'findOne',"create"],
//   except: ["create"], // it's disable create route and enable all other routes like find, findOne, update, delete
  config: {
    find: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    findOne: {},
    create: {},
    update: {},
    delete: {},
  },
});
