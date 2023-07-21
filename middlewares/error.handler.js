const { ValidationError } = require("sequelize");

const logError = (err, req, res, next) => {
  console.log('logErrors');
  console.error(err);
  next(err)
}

const errorHandler = (error, req, res, next) => {
  console.error('errorHandler')
  res.status(500).json({
    message: error.message,
    stack: error.stack
  })
}

const boomErrorHandler = (error, req, res, next) => {
  if(error.isBoom) {
    const { output } = error;
    res.status(output.statusCode).json(output.payload)
  }
  else {
    next(error)
  }
}

const ormErrorHandler = (err, req, res, next) => {
  if(err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    })
  }

  next(err)
}

module.exports = {
  logError,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler
};