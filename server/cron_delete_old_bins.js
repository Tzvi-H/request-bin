const mongoose = require('mongoose');
const config = require('./utils/config');
const Bin = require('./models/bin');

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')

    Bin
      .deleteMany({updatedAt: {
        $lt: new Date(Date.now() - 24*60*60 * 1000)
      }})
      .then(result => {
        console.log(result)
        console.log('closing MongoDB connection')
        mongoose.connection.close()
      })
  })
  .catch(error => {
    console.log('error => ', error.message);
    mongoose.connection.close()
  })
