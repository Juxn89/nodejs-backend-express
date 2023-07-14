const express = require('express');
const app = express()

const SERVER_PORT = 3000;

app.get('/', (req, res) =>{
  res.send('Server with ExpressJS')
})

app.get('/categories', (req, res) =>{
  res.send('Categories page')
})

app.get('/home', (req, res) =>{
  res.send('Home page')
})

app.get('/products', (req, res) =>{
  res.json({
    name: 'T-Shirt',
    color: 'White',
    price: 1000
  })
})

app.listen(SERVER_PORT, () => {
  console.log(`NodeJS Server listening on port: ${SERVER_PORT}`);
})