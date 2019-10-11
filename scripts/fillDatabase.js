require('dotenv').config();
// eslint-disable-next-line import/no-dynamic-require
const games = require(`${__dirname}/data/games.json`);
const mongoose = require('mongoose');
const debug = require('debug')('db');
const gamesService = require('../services/games');

const {
  DB_USER, DB_PASSWORD, DB_ADDRESS, DB_NAME, DEBUG_ENABLED,
} = process.env;

debug.enabled = true;
// mongodb://poe:AMontillado44@ds341247.mlab.com:41247/gams
const URL = `mongodb://edgar:AMontillado44@ds341247.mlab.com:41247/gams`;
debug('xd');
console.log('123');
mongoose.connect(URL, { useNewUrlParser: true }, (err) => {
  if (err) debug(err);
  else {
    debug('Connected to DB...');

    games.forEach((game) => {
      gamesService.addOne(game);
    });
  }
});
