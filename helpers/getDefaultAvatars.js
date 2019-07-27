// eslint-disable-next-line import/no-dynamic-require
const fireEmblemAvatars = require(`${__dirname}/data/avatars-fire-emblem.json`);

const getDefaultAvatars = () => fireEmblemAvatars;

module.exports = getDefaultAvatars;
