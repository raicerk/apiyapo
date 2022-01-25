// Import our Controllers
const mathController = require('../controllers/math.controller')
//const finantialController = require('../controllers/finantial.controller')

// Import Swagger documentation
// const documentation = require('./documentation/Api')

const routes = [
  // {
  //   method: 'GET',
  //   url: '/',
  //   handler: finantialController.getUF
  // },
  {
    method: 'GET',
    url: '/pi/:random_limit',
    handler: mathController.getPiRandomLimit
  }
]

module.exports = routes