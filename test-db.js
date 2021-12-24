const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://16guitar:${password}@cluster0.wwjuo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(url);

const binSchema = new mongoose.Schema({
  url: String,
  requests: []
}, { timestamps: true });

binSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Bin = mongoose.model('bin', binSchema);

const bin = new Bin({
  url: 'abc123'
});

bin.save().then(result => {
  console.log(JSON.stringify(result));
  mongoose.connection.close();
})