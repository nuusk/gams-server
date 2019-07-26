const debug = require('debug')('services/profiles');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Profile = require('../db/models/profile');

debug.enabled = process.env.DEBUG;

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

exports.createProfile = attributes => new Promise((resolve, reject) => {
  const profile = new Profile(attributes);
  profile.save((err, doc) => {
    if (err) {
      reject(err);
    }
    resolve(doc);
  });
});

exports.getUserFromToken = (token) => {
  const secret = process.env.SECRET_KEY;
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, payload) => (err ? reject(err) : resolve(payload)));
  }).then(payload => Profile.findById(payload.sub));
};
