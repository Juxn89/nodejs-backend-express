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

const CheckAdminRole = (req, res, next) => {
  const user = req.user;
  if(user.role === 'Admin') {
    next()
  }
  else {
    next(boom.unauthorized())
  }
}

const CheckRoles = (roles) => {
  return (req, res, next) => {
    const user = req.user;
    if(roles.includes(user.role)) {
      next()
    }
    else {
      next(boom.unauthorized())
    }
  }
}

module.exports = {
  CheckApiKey,
  CheckAdminRole,
  CheckRoles
}