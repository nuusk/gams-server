const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
  },
});

module.exports = mongoose.model('Game', gameSchema);
