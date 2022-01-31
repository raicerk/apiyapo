// Importamos nuestros Controladores
const mathController = require('../controllers/math.controller')
const finantialController = require('../controllers/finantial.controller')

// Importamos schema para Swagger
const mathSchema = require('../schemas/math.schema')
const finantialSchema = require('../schemas/finantial.schema')

/**
 * Definición de rutas de la API
 * @param {*} fastify 
 * @returns 
 */
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