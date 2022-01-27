// Import our Controllers
const mathController = require('../controllers/math.controller')
const finantialController = require('../controllers/finantial.controller')

// Import schema for Swagger
const mathSchema = require('../schemas/math.schema')
const finantialSchema = require('../schemas/finantial.schema')

module.exports = fastify => [
  {
    method: 'GET',
    url: '/',
    schema: finantialSchema.getUF,
    handler: finantialController.getUF
  },
  {
    method: 'GET',
    url: '/pi/:random_limit',
    schema: mathSchema.getPiRandomLimit,
    handler: mathController.getPiRandomLimit
  }
]