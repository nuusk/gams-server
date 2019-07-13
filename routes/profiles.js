const express = require('express');
const debug = require('debug')('profilesRouter');
const profiles = require('../services/profiles');
const generateToken = require('../helpers/generateToken');

const { DEBUG } = process.env;
debug.enabled = DEBUG;

const router = express.Router();

router.get('/me', async (req, res) => {
  debug('dostalem requesta o /me');
  // const { id, name, email } = req.user;
  res.json(await profiles.getMe());
  // res.send(await prof.getAll());
});


router.post('/', async (req, res) => {
  const profile = await profiles.createProfile(req.body);
  const token = generateToken(profile);
  res.status(201).json({ token, username: profile.name, email: profile.email });
});

module.exports = router;
