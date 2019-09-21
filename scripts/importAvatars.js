require('dotenv').config();
// eslint-disable-next-line import/no-dynamic-require
const avatars = require(`${__dirname}/data/avatars-fire-emblem.txt`);
const mongoose = require('mongoose');
const debug = require('debug')('db');
const gamesService = require('../services/games');

const {
  DB_USER, DB_PASSWORD, DB_ADDRESS, DB_NAME, DEBUG,
} = process.env;
debug.enabled = DEBUG;
const URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_ADDRESS}/${DB_NAME}`;

mongoose.connect(URL, { useNewUrlParser: true }, (err) => {
  if (err) debug(err);
  else {
    debug('Connected to DB...');

    games.forEach((game) => {
      gamesService.addOne(game);
    });
  }
});
