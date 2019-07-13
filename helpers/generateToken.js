const debug = require('debug')('generateToken');
const jwt = require('jsonwebtoken');
require('dotenv').config();

debug.enabled = process.env.DEBUG;

const generateToken = (user) => {
  const payload = { sub: user.id };
  const secret = process.env.SECRET_KEY;
  return jwt.sign(payload, secret);
};

module.exports = generateToken;
