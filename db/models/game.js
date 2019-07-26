const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  gameURL: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Game', gameSchema);
