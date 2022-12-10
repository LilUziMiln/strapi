"use strict";

/**
 * newsletter controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::newsletter.newsletter",
  ({ strapi }) => ({
    async findBySlug(ctx) {
      const { slug } = ctx.params;
      const result = await strapi
        .service("api::newsletter.newsletter")
        .findBySlug(slug);
      ctx.body = result;
    },
  })
);
