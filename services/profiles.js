const debug = require('debug')('services/profiles');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Profile = require('../db/models/profile');

debug.enabled = process.env.DEBUG;

exports.getMe = async () => {
  try {
    const me = { _id: 1, avatar: 'https://i.pinimg.com/originals/44/cc/8b/44cc8b8064536e7975bd8bc170840f8a.jpg' };
    return me;
  } catch (err) {
    throw err;
  }
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

exports.createProfile = (attributes) => {
  const profile = new Profile(attributes);
  return profile.save();
};

exports.getUserFromToken = (token) => {
  const secret = process.env.SECRET_KEY;
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, payload) => (err ? reject(err) : resolve(payload)));
  }).then(payload => Profile.findById(payload.sub));
};
