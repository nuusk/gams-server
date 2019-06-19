const games = require('../services/games');

async function routes(fastify) {
  fastify.get('/games', async () => games.getAll());

  fastify.get('/games/:id', async (request) => {
    const { id } = request.params;
    return challenges.getOne(id);
  })
}

module.exports = routes;