require('dotenv').config();
const debug = require('debug')('app');
const express = require('express');
const cors = require('cors');
const indexRouter = require('./routes/index');
const gamesRouter = require('./routes/games');
const db = require('./db');

debug.enabled = process.env.DEBUG;

const app = express();

const whitelist = [process.env.CLIENT_ADDRESS];

const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/games', gamesRouter);

(async function start() {
  await db.connect().catch((err) => {
    /* istanbul ignore next */
    debug(err);
  });

  app.listen(process.env.PORT, () => {
    debug(`Example app listening on port ${process.env.PORT}!`);
  });
}());

module.exports = app;
