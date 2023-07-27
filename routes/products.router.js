const express = require('express')
const ProductServices = require('../services/products.services');
const validatorHandler = require('../middlewares/validatorHandler')
const {
  createProductSchema,
  getProductSchema,
  updateProductSchema,
  queryProductSchema
 } = require('../Schemas/product.schema')

const router = express.Router();
const services = new ProductServices()

router.get('/', validatorHandler(queryProductSchema, 'query'), async (req, res) => {
  const {query} = req;
  const products = await services.find(query);
  res.json(products)
})

router.get('/filter', (req, res) => {
  res.send('I am a filter page')
})

router.get('/:id', validatorHandler(getProductSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params
    const product = await services.findOne(id);

    if(!product) {
      res.status(400).json({message: 'Not found!'});
    }
    else{
      res.status(200).json({
        ...product
      })
    }
  } catch (error) {
    next(error)
  }

})

router.post('/', validatorHandler(createProductSchema, 'body'), async (req, res, next) => {
  try {
    const body = req.body;
    const product = await services.create(body);

    res.status(201).json({
      ...product
    })
  } catch (error) {
    next(error)
  }
})

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const productUpdated = await services.update(id, body);

      res.json(productUpdated)
    } catch (error) {
      next(error)
    }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const productoDeleted = await services.delete(id);

  res.json(productoDeleted)
})

module.exports = router