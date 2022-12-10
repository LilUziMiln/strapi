'use strict';

/**
 * order router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;
const defaultRouter = createCoreRouter('api::order.order');

const customRouter = (innerRouter, extraRoutes = []) => {
  let routes;
  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes.concat(extraRoutes);
      return routes;
    },
  };
};

const customRoutes = [
  {
    method: 'GET',
    path: '/orders/me/stats',
    handler: 'order.stats',
    description: 'Get some stats for the logged in user',
    config: {
      policies: [],
    },
  },
];

module.exports = customRouter(defaultRouter, customRoutes);
