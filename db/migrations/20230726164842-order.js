'use strict';

const { orderSchema, ORDER_TABLE } = require('../models/order.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ORDER_TABLE, orderSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(ORDER_TABLE)
  }
};
