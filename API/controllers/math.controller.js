const boom = require('@hapi/boom') // External Dependancies
const serviceMath = require('../services/math.service') // Import Math Service

/**
 * Función de controlador para retornar el valor de PI usando un valor máximo de largo
 * @param {*} req 
 * @param {*} reply 
 * @returns json object
 */
exports.getPiRandomLimit = async (req, reply) => {
  try {
    const PiCalc = serviceMath.piWithLen(req.query.random_limit)
    return {
      PiCalc
    }
  } catch (err) {
    throw boom.boomify(err)
  }
}
