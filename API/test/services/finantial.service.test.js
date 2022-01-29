const nock = require('nock')
const finantial = require('../../services/finantial.service');

const VALUE_UF = 32188.60
const DATE = '28-01-2022'

describe('Sample Test', () => {

  process.env.URL_API_UF = 'https://mindicador.cl/api/uf/'

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

  it('should test that true === true', async () => {
    const ufval = await finantial.getUFval(DATE)
    expect(ufval).toBe(VALUE_UF)
  })
})

describe('Redis error', () => {

  process.env.URL_API_UF = 'https://mindicador.cl/api/uf/'

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

  it('should test that true === true', async () => {

    const ufval = await finantial.getUFval(DATE)
    expect(ufval).toBe(VALUE_UF)
  })
})

describe('Error sample test', () => {

  process.env.URL_API_UF = 'https://mindicador.cl/api/uf/'

  nock('https://mindicador.cl')
    .get(`/api/uf/${DATE}`)
    .reply(500, 'FAILED!');

  it('should test that true === true', async () => {
    try {
      await finantial.getUFval(DATE)
    } catch (error) {
      expect(error.message).toEqual('Axios error')
    }
  })
})

