const boom = require('@hapi/boom')
const { Strategy } = require('passport-local')
const UserServices = require('../../../services/user.service')
const { verifyPassword } = require('../../../helpers/index')

const userService = new UserServices();

const localStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password'
 }, async (email, password, done) => {
  try {
    const user = await userService.findByEmail(email);

    if(!user)
      done(boom.unauthorized(), false)

    const isMatch = verifyPassword(password, user.password)

    if(!isMatch)
      done(boom.unauthorized(), false)

    delete user.password;

    done(null, user)
  } catch (error) {
    done(error, false)
  }
})

module.exports = localStrategy;