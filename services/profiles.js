const debug = require('debug')('services/profiles');
const jwt = require('jsonwebtoken');
const Profile = require('../db/models/profile');

debug.enabled = process.env.DEBUG;

exports.createProfile = attributes => new Promise((resolve, reject) => {
  const profile = new Profile(attributes);
  profile.save((err, doc) => {
    if (err) {
      reject(err);
    }
    resolve(doc);
  });
});

exports.updateProfile = (attributes) => new Promise((resolve, reject) => {
  return new Promise((resolve, reject) => {
    Object.assign(req.user, { ...attributes });
    user.save((err, doc) => {
      if (err) {
        reject(err);
      }
      resolve(doc);
    });
  });
});

exports.getUserFromToken = (token) => {
  const secret = process.env.SECRET_KEY;
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, payload) => (err ? reject(err) : resolve(payload)));
  }).then(payload => Profile.findById(payload.sub));
};
