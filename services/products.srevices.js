const { faker } = require('@faker-js/faker')

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
        image: faker.image.url()
      })
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }

    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return new Promise((resolve, reject) => {
      resolve(this.products)
    })
  }

  async findOne(id) {
    // const total = this.getTotal(); // This error is just a example for how use middlewares
    return this.products.find(product => product.id === id)
  }

  async update(id, product) {
    const index = this.products.findIndex(product => product.id === id);

    if(index === -1) {
      throw new Error('Product not found')
    }

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
      throw new Error('Product not found')
    }

    this.products.splice(index, 1)
    return { id }
  }
}

module.exports = ProductServices