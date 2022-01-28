const nock = require('nock')
const finantial = require('../../services/finantial.service');

describe('Sample Test', () => {

  const VALUE_UF = 32188.60
  const DATE = '28-01-2022'

  nock('https://mindicador.cl')
    .get(`/api/uf/${DATE}`)
    .reply(200, {
      "version": "1.7.0",
      "autor": "mindicador.cl",
      "codigo": "uf",
      "nombre": "Unidad de fomento (UF)",
      "unidad_medida": "Pesos",
      "serie": [
        {
          "fecha": "2022-01-28T03:00:00.000Z",
          "valor": VALUE_UF
        }
      ]
    })

  process.env.URL_API_UF = 'https://mindicador.cl/api/uf/'

  it('should test that true === true', async () => {
    const ufval = await finantial.getUFval(DATE)
    expect(ufval).toBe(VALUE_UF)
  })
})
