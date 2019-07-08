const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const payload = { sub: user.id };
  const secret = process.env.SECRET;
  return jwt.sign(payload, secret);
};

export default generateToken;
