const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')
const CONFIG = require('../config/config');
const UserService = require('../services/user.service')
const { verifyPassword } = require('../helpers/index');
const { emailHelper, tokenSign } = require('../helpers/index')

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

    const emailResponse = emailHelper.SendMail(
      'email_from@example',
      `${user.email}`,
      'This is a new email',
      'Hi Santi',
      'Santiago you are <b>awesome</b>' )

    return emailResponse
  }

  async sendRecoveryPassword(email) {
    const user = await service.findByEmail(email)

    const PAYLOAD = { sub: user.id }
    const token = tokenSign(PAYLOAD, { expiresIn: '15min' })

    const customLink = `http://myfrontend.com/receovery?token=${token}`

    await service.update(user.id, { rocoveryToken: token })

    if(!user)
      throw boom.unauthorized()

    const emailResponse = emailHelper.SendMail(
      'email_from@example',
      `${user.email}`,
      'Recovery password',
      'Hi Santi',
      `<b>Enter in this link => ${ customLink }</b>`);

    return emailResponse;
  }
}

module.exports = AuthService;