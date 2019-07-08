const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const payload = { sub: user.id };
  const secret = process.env.SECRET_KEY;
  return jwt.sign(payload, secret);
};

export default generateToken;
