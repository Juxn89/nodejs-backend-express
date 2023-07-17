const express = require('express');
const routesAPI = require('./routes/index')

const app = express()

const SERVER_PORT = 3000;

app.use(express.json())

app.get('/', (req, res) =>{
  res.send('Server with ExpressJS')
})

routesAPI(app);

app.listen(SERVER_PORT, () => {
  console.log(`NodeJS Server listening on port: ${SERVER_PORT}`);
})