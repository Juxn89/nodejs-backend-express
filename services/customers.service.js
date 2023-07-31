const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize')
const { hashPassword } = require('../helpers/index')

class CustomerService {
  constructor() {}

  async create(data) {
    const hash = await hashPassword(data.user.password);

    const newUser = await models.User.create({
      ...data.user,
      password: hash
    })

    const newCustomer = await models.Customer.create({
      ...data,
      userId: newUser.id
    });

    return newCustomer;
  }

  async find() {
    const customer = await models.Customer.findAll({
      include: ['user']
    });
    return customer;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);

    if(!customer) {
      throw boom.notFound('Customer not found!')
    }

    return customer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    const response = await customer.update(changes);
    return response;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();

    return {
      id
    }
  }
}

module.exports = CustomerService;