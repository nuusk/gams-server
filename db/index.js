require('dotenv').config();
const mongoose = require('mongoose');
const debug = require('debug')('db');

const {
  DB_USER, DB_PASSWORD, DB_ADDRESS, DB_NAME, DEBUG,
} = process.env;
debug.enabled = DEBUG;
const URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_ADDRESS}/${DB_NAME}`;

function connect() {
  return new Promise((resolve, reject) => {
    mongoose.connect(URL, { useNewUrlParser: true }, (err) => {
      if (err) reject(err);
      else {
        debug('Connected to DB...');
        resolve();
      }
    });
  });
}

function close() {
  return mongoose.disconnect();
}

module.exports = { connect, close };
