const express = require('express')
const ProductServices = require('../services/products.srevices');

const router = express.Router();
const services = new ProductServices()

router.get('/', (req, res) => {
  const products = services.find();
  res.json(products)
})

router.get('/filter', (req, res) => {
  res.send('I am a filter page')
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const product = services.findOne(id);

  if(!product) {
    res.status(400).json({message: 'Not found!'});
  }
  else{
    res.status(200).json({
      ...product
    })
  }
})

router.post('/', (req, res) => {
  const body = req.body;

  const product = services.create(body);

  res.status(201).json({
    ...product
  })
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const productUpdated = services.update(id, body);

  res.json(productUpdated)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const productoDeleted = services.delete(id);

  res.json(productoDeleted)
})

module.exports = router