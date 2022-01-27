const dotenv = require('dotenv').config() // Import Dotenv for enviroment variables
const routes = require('./routes') // Import Routes
const swagger = require('./config/swagger') // Import Swagger Options
const fastify = require('fastify') // Require the fastify framework and instantiate it

function build(opts = {}) {
  const app = fastify(opts)
  app.register(require('fastify-swagger'), swagger.options) // Register Swagger
  app.register(require('fastify-redis'), { host: process.env.REDIS_HOST }) // Register Redis

  // Loop over each route
  routes(app).forEach((route, index) => {
    app.route(route)
  })
  return app
}

module.exports = build