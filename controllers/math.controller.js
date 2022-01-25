// External Dependancies
const boom = require('@hapi/boom');
const serviceMath = require('../services/math.service')

// Get PI number with limit random
exports.getPiRandomLimit = async (req, reply) => {
  try {
    const PiCalc = serviceMath.piWithLen(req.query.random_limit)
    console.log(PiCalc)
    return {
      PiCalc
    }
  } catch (err) {
    throw boom.boomify(err)
  }
}
