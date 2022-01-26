// Import our Controllers
const mathController = require('../controllers/math.controller')
const finantialController = require('../controllers/finantial.controller')
const mathSchema = require('../schemas/math.schema')

// Import Swagger documentation
// const documentation = require('./documentation/Api')

const routes = [
  {
    method: 'GET',
    url: '/',
    handler: finantialController.getUF
  },
  {
    method: 'GET',
    url: '/pi/:random_limit',
    schema: mathSchema.getPiRandomLimit,
    handler: mathController.getPiRandomLimit
  }
]

module.exports = routes