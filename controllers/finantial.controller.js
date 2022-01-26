const boom = require('@hapi/boom') // External Dependancies
const serviceFinantial = require('../services/finantial.service') // Import Math Service

// Get UF today
exports.getUF = async (req, reply) => {
  try {
    const uf = await serviceFinantial.uf()
    return {
      uf: uf.toString()
    }
  } catch (err) {
    throw boom.boomify(err)
  }
}
