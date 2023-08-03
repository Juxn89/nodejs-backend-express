const { Strategy } = require('passport-local')
const AuthServices = require('../../../services/auth.service')

const authService = new AuthServices();

const localStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password'
 }, async (email, password, done) => {
  try {
    const user = await authService.getUser(email, password);

    done(null, user)
  } catch (error) {
    done(error, false)
  }
})

module.exports = localStrategy;