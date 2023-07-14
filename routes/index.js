const productsRouter = require('./products.router')
const usersRouter = require('./users.router')
const categoriesRouter = require('./categories.router')

const routerAPI = (app) => {
  app.use('/products', productsRouter)
  app.use('/users', usersRouter)
  app.use('/categories', categoriesRouter)
}

module.exports = routerAPI