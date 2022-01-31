const boom = require('@hapi/boom') // Dependencias externas
const serviceFinantial = require('../services/finantial.service') // Importamos nuestro servicio matemático

/**
 * Función de controlador para retornar el valor de la UF del día
 * @param {*} req 
 * @param {*} reply 
 * @returns json object
 */
exports.getUF = async function (req, reply) {
  try {
    const uf = await serviceFinantial.uf(this.redis)
    return {
      uf
    }
  } catch (err) {
    throw boom.boomify(err)
  }
}
