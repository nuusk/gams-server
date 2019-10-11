require('dotenv').config();
const debug = require('debug')('app');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const gamesRouter = require('./routes/games');
const profilesRouter = require('./routes/profiles');
const tokensRouter = require('./routes/tokens');
const corsOptions = require('./middleware/cors');
const db = require('./db');

debug.enabled = process.env.DEBUG;

const app = express();

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/games', gamesRouter);
app.use('/profiles', profilesRouter);
app.use('/tokens', tokensRouter);

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
