const debug = require('debug')('generateToken');
const jwt = require('jsonwebtoken');
require('dotenv').config();

debug.enabled = process.env.DEBUG;

const generateToken = (user) => {
  // eslint-disable-next-line no-underscore-dangle
  const payload = { sub: user._id };
  const secret = process.env.SECRET_KEY;
  return jwt.sign(payload, secret);
};

module.exports = generateToken;
