const { USER_SCHEMA, User } = require('./user.model')
const { CUSTOMER_SCHEMA, Customer } = require('./customer.model')

const setupModels = (sequelize) => {
  // Initialization
  User.init(USER_SCHEMA, User.config(sequelize))
  Customer.init(CUSTOMER_SCHEMA, Customer.config(sequelize))

  User.associate(sequelize.models)
  Customer.associate(sequelize.models)
}

module.exports = setupModels