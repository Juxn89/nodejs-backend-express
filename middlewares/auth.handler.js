const boom = require('@hapi/boom');
const CONFIG = require('../config/config');

const CheckApiKey = (req, res, next) => {
  if(req.headers['api'] === CONFIG.apiKey) {
    next();
  }
  else {
    next(boom.unauthorized())
  }
}

module.exports = {
  CheckApiKey
}