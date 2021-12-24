const binsRouter = require('express').Router();

// Create a bin
binsRouter.post('/', (req, res) => {
  res.send('hello from POST /bins');
})

// Collect requests for a bin
binsRouter.all('/:id', (req, res) => {
  res.send('hello from GET /bins/:id');
})

// View bin requests
binsRouter.get('/:id/inspect', (req, res) => {
  res.send('hello from GET /bins/:id?inspect');
})

module.exports = binsRouter;