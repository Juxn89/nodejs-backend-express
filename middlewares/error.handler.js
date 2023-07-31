const { ValidationError, DatabaseError } = require("sequelize");

const logError = (err, req, res, next) => {
  next(err)
}

const errorHandler = (error, req, res, next) => {
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
  else{
    next(err)
  }
}

const databaseError = (error, req, res, next) => {
  if(error instanceof DatabaseError) {
    res.status(409).json({
      statusCode: 409,
      message: error.name,
      error
    })
  }
  else {
    next(error)
  }
}

module.exports = {
  logError,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
  databaseError
};