'use strict';

/**
 * order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order.order', ({ strapi }) => ({
  async stats(userId) {
    console.log(userId);
    let result = {};
    const entries = await strapi.entityService.findMany('api::order.order', {
      filters: {
        saddleFitter: {
          id: userId,
        },
      },
    });

    const orderStatuses = await strapi.entityService.findMany(
      'api::orderstatus.orderstatus'
    );

    result.totalOrders = entries.length;
    result.orderStatuses = await statusData(userId, orderStatuses);

    return result;
  },
}));

async function statusData(userId, statuses) {
  let data = {};
  for (let i = 0; i < statuses.length; i++) {
    const orderByStatus = await strapi.entityService.findMany(
      'api::order.order',
      {
        filters: {
          saddleFitter: {
            id: userId,
          },
          orderStatus: {
            id: statuses[i].id,
          },
        },
      }
    );

    data[statuses[i].statusName] = orderByStatus.length;
  }

  return data;
}
