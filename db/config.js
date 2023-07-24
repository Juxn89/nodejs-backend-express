require('dotenv').config()
const config = require('./../config/config')

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbDatabase}`

module.exports = {
  development: {
    url: URI,
    dialect: `${config.dbEngine}`
  },
  producction: {
    url: URI,
    dialect: `${config.dbEngine}`
  }
}