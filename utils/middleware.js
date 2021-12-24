const logger = require('./logger');

const requestLogger = (req, res, next) => {
  logger.info('Method:', req.method)
  logger.info('Path:  ', req.path)
  logger.info('Body:  ', req.body)
  logger.info('---')
  next()
}

const unknownEndpoint = (req, res) => {
  
}

const errorHandler = (error, request, response, next) => {

}

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
}