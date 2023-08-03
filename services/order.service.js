const { models } = require('./../libs/sequelize');

class OrderService {
  constructor() {}

  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async find() {
    const orders = await models.Order.findAll();
    return orders;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [{ association: 'customer', include: ['user'] }],
    });
    return order;
  }

  async findByUser(userId) {
    const orders = await models.Order.findAll({
      where: {
        '$customer.user.id$': userId
      },
      include: [
        {
          association: 'customer',
          include: ['user']
        }
      ]
    })

    return orders;
  }

  async update(id, changes) {
    return { id, changes };
  }

  async delete(id) {
    return { id };
  }

  async addItem(data) {
    const newItem = await models.OrderProdudct.create(data);
    return newItem;
  }
}

module.exports = OrderService;
