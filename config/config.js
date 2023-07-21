const CONFIG = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  dbHost: process.env.MYSQL_DB_SERVER,
  dbPort: process.env.MYSQL_DB_PORT,
  dbUser: process.env.MYSQL_DB_USER,
  dbPassword: process.env.MYSQL_DB_PASSWORD,
  dbDatabase: process.env.MYSQL_DB_NAME
}

module.exports = Object.freeze(CONFIG)