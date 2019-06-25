const express = require('express');
const debug = require('debug')('profilesRouter');
const profiles = require('../services/profiles');

const { DEBUG } = process.env;
debug.enabled = DEBUG;

const router = express.Router();

router.get('/me', async (req, res) => {
  debug('dostalem requesta o /me');
  // const { id, name, email } = req.user;
  res.json(await profiles.getMe());
  // res.send(await prof.getAll());
});

module.exports = router;
