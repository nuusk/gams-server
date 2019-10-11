const express = require('express');
const debug = require('debug')('profilesRouter');
const profiles = require('../services/profiles');
const tokens = require('../services/tokens');
const getDefaultAvatars = require('../helpers/getDefaultAvatars');
const authenticate = require('../middleware/authenticate');

const { DEBUG } = process.env;
debug.enabled = DEBUG;

const router = express.Router();

router.get('/me', authenticate, async (req, res) => {
  const {
    id, username, email, avatarURL,
  } = req.user;
  res.json({
    id, username, email, avatarURL,
  });
});

// do przerzucenia na zasob avatars
router.get('/avatars', async (req, res) => {
  res.json(getDefaultAvatars());
});

router.post('/', async (req, res) => {
  try {
    const profile = await profiles.createProfile(req.body);
    debug(profile);
    const token = tokens.generateToken(profile);
    res.status(201).json({ token, username: profile.username, email: profile.email });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
});

module.exports = router;
