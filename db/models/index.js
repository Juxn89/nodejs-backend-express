const { USER_SCHEMA, User } = require('./user.model')
const { CUSTOMER_SCHEMA, Customer } = require('./customer.model')
const { PRODUCT_SCHEMA, Product } = require('./product.model')
const { CATEGORY_SCHEMA, Category } = require('./category.model')
const { OrderSchema, Order } = require('./order.model')
const { OrderProductSchema, OrderProduct } = require('../models/order-product.model')

const setupModels = (sequelize) => {
  // Initialization
  User.init(USER_SCHEMA, User.config(sequelize))
  Customer.init(CUSTOMER_SCHEMA, Customer.config(sequelize))
  Product.init(PRODUCT_SCHEMA, Product.config(sequelize))
  Category.init(CATEGORY_SCHEMA, Category.config(sequelize))
  Order.init(OrderSchema, Order.config(sequelize))
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize))

  User.associate(sequelize.models)
  Customer.associate(sequelize.models)
  Category.associate(sequelize.models)
  Product.associate(sequelize.models)
  Order.associate(sequelize.models)
}

module.exports = setupModels