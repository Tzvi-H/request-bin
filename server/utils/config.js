require('dotenv').config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
// const HOSTNAME = 'https://tzvih.dev/api/bins/';
const HOSTNAME = process.env.HOST_NAME

module.exports = {
  PORT,
  MONGODB_URI,
  HOSTNAME
}