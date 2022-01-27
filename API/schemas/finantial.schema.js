exports.getUF = {
  description: 'Retorna el valor de la UF del día',
  response: {
    200: {
      type: 'object',
      properties: {
        uf: { type: 'string' }
      }
    }
  }
}