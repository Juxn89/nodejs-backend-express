'use strict';

const { DataTypes } = require("sequelize");
const { USER_TABLE } = require("../models/user.model");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(USER_TABLE, 'recovery-token', {
      allowNull: true,
      type: DataTypes.STRING,
      field: 'recovery_token'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(USER_TABLE, 'recovery-token')
  }
};
