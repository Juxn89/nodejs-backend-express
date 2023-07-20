const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres');

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const client = await getConnection()
    const users = await client.query('SELECT * FROM tasks')

    return users.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;