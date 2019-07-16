const profiles = require('../services/profiles');

const isBearer = authorization => authorization.startsWith('Bearer ');

const extractToken = authorization => authorization.split(' ')[1];

const authenticate = (req, res, next) => {
  const authorization = req.get('Authorization');
  if (authorization && isBearer(authorization)) {
    const token = extractToken(authorization);
    profiles.getUserFromToken(token)
      .then((user) => {
        req.user = user;
        next();
      }).catch((error) => {
        res.status(401).json({ message: error.message });
      });
  } else {
    res.status(401).json({ message: 'authentication token is required' });
  }
};

module.exports = authenticate;
