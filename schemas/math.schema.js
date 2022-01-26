exports.getPiRandomLimit = {
  querystring: {
    random_limit: { type: 'number' }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        PiCalc: { type: 'string' }
      }
    }
  }
}