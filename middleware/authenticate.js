const debug = require('debug')('middleware/authenticate');
const profiles = require('../services/profiles');

debug.enabled = process.env.DEBUG;

const isBearer = authorization => authorization.startsWith('Bearer ');

const extractToken = authorization => authorization.split(' ')[1];

const authenticate = (req, res, next) => {
  const authorizationHeader = req.get('Authorization');
  if (authorizationHeader && isBearer(authorizationHeader)) {
    const token = extractToken(authorizationHeader);
    profiles.getUserFromToken(token)
      .then((user) => {
        req.user = user;
        next();
      }).catch((error) => {
        res.status(401).json({ message: error.message });
      });
  } else {
    res.status(401).json({ message: 'Authentication token is required' });
  }
};

module.exports = authenticate;
