const { USER_SCHEMA, USER_TABLE, User } = require('./user.model')

const setupModels = (sequelize) => {
  User.init(USER_SCHEMA, User.config(sequelize))
}

module.exports = setupModels