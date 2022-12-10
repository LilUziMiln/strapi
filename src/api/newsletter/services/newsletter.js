"use strict";

/**
 * newsletter service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::newsletter.newsletter",
  ({ strapi }) => ({
    async findBySlug(slug) {
      const entry = await strapi.entityService.findMany(
        "api::newsletter.newsletter",
        {
          filters: { slug },
        }
      );

      return entry[0];
    },
  })
);
