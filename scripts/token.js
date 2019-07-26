const debug = require('debug')('token');
const generateToken = require('../helpers/generateToken');
require('dotenv').config();

debug.enabled = process.env.DEBUG;

const user = {
  id: '1234',
  name: 'poe',
};

debug(generateToken(user));
