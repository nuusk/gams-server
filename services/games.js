const debug = require('debug')('services/games');
const Game = require('../db/models/game');

debug.enabled = process.env.DEBUG;

exports.addOne = (game) => {
  const newGame = new Game({
    title: game.title,
    gameURL: game.gameURL,
    imageURL: game.imageURL,
  });

  return newGame.save().catch((e) => {
    debug(e);
  });
};

exports.getAll = () => {
  try {
    const games = Game.find({});
    return games;
  } catch (err) {
    throw err;
  }
};

exports.getOne = (id) => {
  try {
    const game = { title: `${id} The Legend of Zelda: Majora's Mask` };
    return game;
  } catch (err) {
    throw err;
  }
};
