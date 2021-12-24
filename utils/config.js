require('dotenv').config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const HOSTNAME = process.env.HOSTNAME;

module.exports = {
  PORT,
  MONGODB_URI,
  HOSTNAME
}