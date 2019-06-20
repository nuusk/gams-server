const express = require('express');
const debug = require('debug')('gamesRouter');
const games = require('../services/games');

const { DEBUG } = process.env;
debug.enabled = DEBUG;

const router = express.Router();

router.get('/', async (req, res) => {
  res.send(await games.getAll());
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  res.send(await games.getOne(id));
});

module.exports = router;
