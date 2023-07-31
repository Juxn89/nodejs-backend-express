require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routesAPI = require('./routes/index')
const { CheckApiKey } = require('./middlewares/auth.handler')
const { errorHandler, logError, boomErrorHandler, ormErrorHandler, databaseError } = require('./middlewares/error.handler')

const app = express()

const SERVER_PORT = process.env.NODE_PORT || 3000;

app.use(express.json())

const WHITE_LIST = ['http://localhost:8080', 'https://myapp.io', 'http://localhost:3000']
const CORS_options = {
  origin: (origin, callback) => {
    if(WHITE_LIST.includes(origin) || !origin) callback(null, true);
    else callback(new Error('Not allowed'))
  }
}

app.use(cors(CORS_options));

require('./helpers/auth')

app.get('/', (req, res) =>{
  res.send('Server with ExpressJS')
})

app.get('/private-route', CheckApiKey, (req, res) =>{
  res.send('I am a private page >=)')
})

routesAPI(app);

app.use(logError);
app.use(databaseError);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(SERVER_PORT, () => {
  console.log(`NodeJS Server listening on port: ${SERVER_PORT}`);
})