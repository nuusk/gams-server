exports.getAll = async () => {
  try {
    const games = [
      { title: 'The Legend of Zelda: Ocarina of Time' },
      { title: 'Sonic the Hedgehog' },
      { title: 'Dyna Blaster' },
    ];
    return games;
  } catch (err) {
    throw err;
  }
}

exports.getOne = async () => {
  try {
    const game = { title: `The Legend of Zelda: Majora's Mask` };
    return game;
  } catch (err) {
    throw err;
  }
}