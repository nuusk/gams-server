const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const uniqueValidation = require('mongoose-beautiful-unique-validation');

const emailPattern = /^[a-z0-9\u007F-\uffff!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i;

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [emailPattern, 'invalid email'],
  },
  passwordDigest: {
    type: String,
    required: true,
  },
  avatarURL: {
    type: String,
  },
});

profileSchema.plugin(uniqueValidation);

profileSchema.virtual('password').set(function hashPassword(password) {
  this.passwordDigest = bcrypt.hashSync(password, 10);
});

module.exports = mongoose.model('Profile', profileSchema);
