'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const controllerUid = 'api::order.order';

module.exports = createCoreController(controllerUid, ({ strapi }) => ({
  async stats(ctx) {
    const { id } = ctx.state.user;
    const result = await strapi.service(controllerUid).stats(id);
    ctx.body = result;
  },
}));
