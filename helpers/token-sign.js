const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/config')

const signToken = (payload) => {
  return jwt.sign(payload, jwtSecret)
}

module.exports = signToken
