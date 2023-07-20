const CONFIG = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  dbHost: process.env.DB_SERVER,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbDatabase: process.env.DB_NAME
}

module.exports = Object.freeze(CONFIG)