require('dotenv').config();
const debug = require('debug')('app');
const express = require('express');
const indexRouter = require('./routes/index');
const gamesRouter = require('./routes/games');
const db = require('./db');

debug.enabled = process.env.DEBUG;

const app = express();

app.use('/', indexRouter);
app.use('/games', gamesRouter);

(async function start() {
  await db.connect().catch((err) => {
    /* istanbul ignore next */
    debug(err);
  });

  app.listen(process.env.PORT | 4044, () => {
    debug(`Example app listening on port ${process.env.PORT | 4044}!`);
  });
}());

module.exports = app;
