const express = require('express')
const { faker } = require('@faker-js/faker')

const router = express.Router();

router.get('/', (req, res) => {
  const {size} = req.query;
  const limit = size || 10;

  const products = [];
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url()
    })
  }

  res.json(products)
})

router.get('/filter', (req, res) => {
  res.send('I am a filter page')
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  if(id === '999') {
    res.status(404).json({
      message: 'Not found'
    })
  }

  res.status(201).json(
    {
      id,
      name: 'T-Shirt',
      color: 'White',
      price: 1000
    }
  )
})

router.post('/', (req, res) => {
  const body = req.body;

  res.status(201).json({
    message: 'Product created',
    product: body
  })
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'Product updated',
    product: {
      id,
      ...body
    }
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: 'Product deleted',
    id
  })
})

module.exports = router