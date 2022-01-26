const dotenv = require('dotenv').config() // Import Dotenv for enviroment variables
const qs = require('qs')
const routes = require('./routes') // Import Routes
const swagger = require('./config/swagger') // Import Swagger Options
const fastify = require('fastify')({ 
  logger: true,
  querystringParser: str => qs.parse(str)
}) // Require the fastify framework and instantiate it

fastify.register(require('fastify-swagger'), swagger.options) // Register Swagger
fastify.register(require('fastify-redis'), { host: process.env.REDIS_HOST }) // Register Redis

// Loop over each route
routes(fastify).forEach((route, index) => {
  fastify.route(route)
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT, '0.0.0.0')
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start();
