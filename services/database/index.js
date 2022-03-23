const mongoose = require('mongoose');
const keys = require('../../config/keys');

const connectDb = async () => {
  mongoose
    .connect(keys.mongoURL, { dbName: 'test' })
    .then(() => {
      console.log('Successfully connected to DB');
    })
    .catch(() => {
      console.log('Failed to connect to DB');
    });
};

module.exports = {
  connectDb,
};
