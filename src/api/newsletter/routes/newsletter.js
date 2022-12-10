"use strict";

/**
 * newsletter router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

const defaultRouter = createCoreRouter("api::newsletter.newsletter");

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
    method: "GET",
    path: "/newsletters/slug/:slug",
    handler: "newsletter.findBySlug",
    description: "Get the newsletter by the slug",
    config: {
      policies: [],
    },
  },
];

module.exports = customRouter(defaultRouter, customRoutes);
