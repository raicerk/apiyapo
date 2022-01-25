const dotenv = require('dotenv').config() // Import Dotenv for enviroment variables
const qs = require('qs')
const routes = require('./routes') // Import Routes
const swagger = require('./config/swagger') // Import Swagger Options
const fastify = require('fastify')({ 
  logger: true,
  querystringParser: str => qs.parse(str)
}) // Require the fastify framework and instantiate it

// Loop over each route
routes.forEach((route, index) => {
  fastify.route(route)
})

fastify.register(require('fastify-swagger'), swagger.options) // Register Swagger


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
