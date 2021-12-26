const config = require('../utils/config');
const binsRouter = require('express').Router();
const Bin = require('../models/bin');

let clients = [];

// Get how many clients have connected
binsRouter.get('/status', (request, response) => response.json({clients: clients.length}));

// Create a bin
binsRouter.post('/', (req, res, next) => {
  const bin = new Bin();
 
  bin.save()
    .then(createdBin => {
      const bin = {url: config.HOSTNAME + createdBin.id, id: createdBin.id};
      res.json(bin)
    })
    .catch(error => {
      next(error)
    })
})

// Collect requests for a bin
binsRouter.all('/:id', (req, res, next) => {
  const newRequest = {
    method: req.method,
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    body: JSON.stringify(req.body),
    date: new Date(),
    url: `${req.protocol}://${req.hostname}${req.path}`,
    headers: req.headers
  }

  if (newRequest.ip.startsWith('::ffff:')) {
    newRequest.ip = newRequest.ip.slice('::ffff:'.length)
  }

  Bin.findByIdAndUpdate(req.params.id, {$push: {"requests": newRequest}})
    .then(updatedBin => {
      if (updatedBin) {
        res.status(200).end()
        clients
          .filter(client => client.binId === req.params.id)
          .forEach(client => client.response.write(`data: ${JSON.stringify(newRequest)}\n\n`))
      } else {
        res.status(404).end();
      }
    })
    .catch(error => next(error))
})

// View bin requests
binsRouter.get('/:id/inspect', (req, res, next) => {
  const binId = req.params.id;
  Bin.findById(binId)
    .then(bin => {
      if (bin) {
        const headers = {
          'Content-Type': 'text/event-stream',
          'Connection': 'keep-alive',
          'Cache-Control': 'no-cache'
        };
        res.writeHead(200, headers);
        const data = `data: ${JSON.stringify(bin.requests)}\n\n`;
        res.write(data)
        const clientId = Date.now();
        const newClient = {
          id: clientId,
          binId,
          response: res
        };
        clients.push(newClient);
        req.on('close', () => {
          console.log(`${clientId} Connection closed`);
          clients = clients.filter(client => client.id !== clientId);
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(error => next(error))
})

module.exports = binsRouter;