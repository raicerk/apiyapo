const boom = require('@hapi/boom') // External Dependancies
const serviceFinantial = require('../services/finantial.service') // Import Math Service

// Get UF today
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
