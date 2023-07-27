const boom = require('@hapi/boom')
const { faker } = require('@faker-js/faker')
const { models } = require('../libs/sequelize')

class ProductServices {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean()
      })
    }
  }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(query) {
    const options = {
      include: ['category']
    }

    const { limit, offset } = query;
    if(limit && offset) {
      options.limit = limit;
      options.offset = offset
    }

    const data = await models.Product.findAll(options);
    return data;
  }

  async findOne(id) {
    // const total = this.getTotal(); // This error is just a example for how use middlewares
    const product = this.products.find(product => product.id === id)

    if(!product)
      throw boom.notFound('Product not found')

    if(product.isBlock)
      throw boom.conflict('Product is blocked')

    return product;
  }

  async update(id, product) {
    const index = this.products.findIndex(product => product.id === id);

    if(index === -1) {
      throw boom.notFound('Product not found')
    }

    if(product.isBlock)
      throw boom.conflict('Product is blocked')

    const currentProduct = this.products[index];
    this.products[index] = {
      ...currentProduct,
      ...product
    }

    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(product => product.id === id);

    if(index === -1) {
      throw boom.notFound('Product not found')
    }

    this.products.splice(index, 1)
    return { id }
  }
}

module.exports = ProductServices