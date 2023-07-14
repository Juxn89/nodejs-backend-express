const express = require('express');
const { faker } = require('@faker-js/faker')

const app = express()

const SERVER_PORT = 3000;

app.get('/', (req, res) =>{
  res.send('Server with ExpressJS')
})

app.get('/home', (req, res) =>{
  res.send('Home page')
})

app.get('/categories', (req, res) =>{
  res.send('Categories page')
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params

  res.json(
    {
      categoryId,
      productId
    }
  )
})

app.get('/products', (req, res) => {
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

app.get('/products/filter', (req, res) => {
  res.send('I am a filter page')
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params

  res.json(
    {
      id,
      name: 'T-Shirt',
      color: 'White',
      price: 1000
    }
  )
})

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  if(limit && offset) {
    res.json({
      limit,
      offset
    })
  }
  else {
    res.send('There\'s no params')
  }
})

app.listen(SERVER_PORT, () => {
  console.log(`NodeJS Server listening on port: ${SERVER_PORT}`);
})