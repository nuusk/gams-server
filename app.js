const PORT = 4044;

const fastify = require('fastify')({
  logger: true,
});

fastify.listen(PORT | 4044, '0.0.0.0', (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listeinng on ${address}`);
});