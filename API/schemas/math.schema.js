/**
 * Esquema de metodo para obtener el valor de PI
 */
exports.getPiRandomLimit = {
  description: 'Retorna el valor de PI en un con largo random usando como largo máximo el valor ingresado',
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
