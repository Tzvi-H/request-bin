const config = require('../utils/config');
const binsRouter = require('express').Router();
const Bin = require('../models/bin');

// Create a bin
binsRouter.post('/', (req, res, next) => {
  const bin = new Bin();
 
  bin.save()
    .then(createdBin => {
      res.json({url: config.HOSTNAME + createdBin.id})
    })
    .catch(error => {
      next(error)
    })
  console.log('hello')  
})

// Collect requests for a bin
binsRouter.all('/:id', (req, res, next) => {
  const newRequest = {
    method: req.method,
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    body: JSON.stringify(req.body),
    date: new Date(),
    hostname: `${req.protocol}://${req.hostname}`,
    path: req.originalUrl,
    headers: req.headers
  }

  if (newRequest.ip.startsWith('::ffff:')) {
    newRequest.ip = newRequest.ip.slice('::ffff:'.length)
  }

  Bin.findByIdAndUpdate(req.params.id, {$push: {"requests": newRequest}}, { new: true })
    .then(updatedBin => {
      if (updatedBin) {
        res.status(200).end()
      } else {
        res.status(404).end();
      }
    })
    .catch(error => next(error))
})

// View bin requests
binsRouter.get('/inspect/:id', (req, res, next) => {
  Bin.findById(req.params.id, 'requests')
    .then(bin => {
      if (bin) {
        res.json(bin)
      } else {
        res.status(404).end();
      }
    })
    .catch(error => next(error))
})

module.exports = binsRouter;