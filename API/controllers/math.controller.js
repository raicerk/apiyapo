const boom = require('@hapi/boom') // External Dependancies
const serviceMath = require('../services/math.service') // Import Math Service

// Get PI number with limit random
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
