require('dotenv').config();
const debug = require('debug')('services/tokens');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Profile = require('../db/models/profile');

debug.enabled = process.env.DEBUG;

exports.generateToken = (user) => {
  // eslint-disable-next-line no-underscore-dangle
  const payload = { sub: user._id };
  const secret = process.env.SECRET_KEY;
  return jwt.sign(payload, secret);
};

exports.login = ({ email, password }) => new Promise(async (resolve, reject) => {
  const profile = await Profile.findOne({ email });
  if (!profile) {
    reject(new Error('Wrong credentials'));
    return;
  }
  bcrypt.compare(password, profile.passwordDigest, (err, same) => {
    if (err || !same) {
      reject(err);
    } else {
      resolve(profile);
    }
  });
});
