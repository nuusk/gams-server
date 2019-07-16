const express = require('express');
const debug = require('debug')('profilesRouter');
const profiles = require('../services/profiles');
const generateToken = require('../helpers/generateToken');

const { DEBUG } = process.env;
debug.enabled = DEBUG;

const router = express.Router();

router.get('/me', async (req, res) => {
  debug('dostalem requesta o /me');
  const { id, name, email } = req.user;
  res.json(await profiles.getMe({ id, name, email }));
  // res.send(await prof.getAll());
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const profile = await profiles.login({ email, password }).catch(() => {
    res.status(401).json({ message: 'Wrong credentials' });
  });
  if (profile) {
    const token = generateToken(profile);
    res.json({ token, username: profile.name, userEmail: profile.email });
  }
});


router.post('/', async (req, res) => {
  const profile = await profiles.createProfile(req.body);
  const token = generateToken(profile);
  res.status(201).json({ token, username: profile.name, email: profile.email });
});

module.exports = router;
