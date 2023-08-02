const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/config')

const verifyToken = (token) => {
  return jwt.verify(token, jwtSecret)
}

module.exports = verifyToken