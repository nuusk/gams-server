exports.getAll = async () => {
  try {
    const games = [
      { _id: 1, title: 'The Legend of Zelda: Ocarina of Time' },
      { _id: 2, title: 'Sonic the Hedgehog' },
      { _id: 3, title: 'Dyna Blaster' },
    ];
    return games;
  } catch (err) {
    throw err;
  }
};

exports.getOne = async (id) => {
  try {
    const game = { title: `${id} The Legend of Zelda: Majora's Mask` };
    return game;
  } catch (err) {
    throw err;
  }
};
