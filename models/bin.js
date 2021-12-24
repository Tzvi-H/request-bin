const mongoose = require('mongoose');

const binSchema = new mongoose.Schema({
  url: String,
  created_at: Date,
  requests: []
}, { timestamps: true });

binSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('bin', binSchema);