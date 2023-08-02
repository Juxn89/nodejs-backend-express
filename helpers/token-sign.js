const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/config')

const PAYLOAD = {
  sub: 1,
  role: 'customer'
}

const signToken = () => {
  return jwt.sign(PAYLOAD, jwtSecret)
}

module.exports = signToken
