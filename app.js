require('dotenv').config();
const debug = require('debug')('app');
const express = require('express');
const indexRouter = require('./routes/index');
const gamesRouter = require('./routes/games');
const db = require('./db');

const {
  PORT, DEBUG,
} = process.env;
debug.enabled = DEBUG;
const port = PORT | 4044;

const app = express();

app.use('/', indexRouter);
app.use('/games', gamesRouter);

(async function start() {
  await db.connect().catch((err) => {
    /* istanbul ignore next */
    debug(err);
  });

  app.listen(port, () => {
    debug(`Example app listening on port ${port}!`);
  });
}());

module.exports = app;
