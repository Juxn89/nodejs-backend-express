const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/config')

const signToken = (payload, options) => {
  if(!options)
    return jwt.sign(payload, jwtSecret, options)

  return jwt.sign(payload, jwtSecret)
}

module.exports = signToken
