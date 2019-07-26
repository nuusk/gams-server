require('dotenv').config();

const whitelist = [process.env.CLIENT_ADDRESS];

const corsOptions = {
  origin(origin, callback) {
    if (!origin) return callback(null, true);
    const domain = origin.split('//')[1];
    if (whitelist.indexOf(domain) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
};

module.exports = corsOptions;
