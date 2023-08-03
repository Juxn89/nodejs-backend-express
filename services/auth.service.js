const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')
const CONFIG = require('../config/config');
const UserService = require('../services/user.service')
const { verifyPassword } = require('../helpers/index');
const { emailHelper } = require('../helpers/index')

const service = new UserService();

class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email)

    if(!user)
      throw boom.unauthorized()

    const isMatch = await verifyPassword(password, user.password)

    if(!isMatch)
      throw boom.unauthorized()

    delete user.dataValues.password;

    return user;
  }

  singToken(user) {
    const PAYLOAD = {
      sub: user.id,
      role: user.role
    }

    const token = jwt.sign(PAYLOAD, CONFIG.jwtSecret)

    return { user, token}
  }

  async sendMail(email) {
    const user = await service.findByEmail(email)

    if(!user)
      throw boom.unauthorized()

    emailHelper.SendMail('email_from@example', `${user.email}`, 'This is a new email', 'Hi Santi', 'Santiago you are <b>awesome</b>' )
  }
}

module.exports = AuthService;