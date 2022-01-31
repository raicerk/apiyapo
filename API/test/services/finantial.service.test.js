const nock = require('nock')
const finantial = require('../../services/finantial.service');

const VALUE_UF = 32188.60
const DATE = '28-01-2022'

describe('Test de servicio financiero exitoso', () => {

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

  it('Test de retorno exitoso del valor de la UF del día', async () => {
    const ufval = await finantial.getUFval(DATE)
    expect(ufval).toBe(VALUE_UF)
  })
})

describe('Test de servicio financiero con error de redis', () => {

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

  it('Test con retorno de error en redis para la obtención del valor de la UF', async () => {
    try {
      const ufval = await finantial.uf()
    } catch (error) {
      expect(error.message).toBe('Redis error')
    }
  })
})

describe('Test de servicio financiero con error de axios', () => {

  process.env.URL_API_UF = 'https://mindicador.cl/api/uf/'

  nock('https://mindicador.cl')
    .get(`/api/uf/${DATE}`)
    .reply(500, 'FAILED!');

  it('Test de retorno de error de axios por error de respuesta en el servicio de la UF', async () => {
    try {
      await finantial.getUFval(DATE)
    } catch (error) {
      expect(error.message).toEqual('Axios error')
    }
  })
})
