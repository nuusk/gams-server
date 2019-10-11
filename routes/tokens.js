const express = require('express');
const debug = require('debug')('profilesRouter');
const tokens = require('../services/tokens');

const { DEBUG } = process.env;
debug.enabled = DEBUG;

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const profile = await tokens.login({ email, password }).catch(() => {
    res.status(401).json({ message: 'Wrong credentials' });
  });
  if (profile) {
    const token = tokens.generateToken(profile);
    res.json({ token, username: profile.name, userEmail: profile.email });
  }
});

module.exports = router;
