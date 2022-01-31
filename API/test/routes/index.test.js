jest.mock('ioredis', () => require('ioredis-mock/jest'));

const build = require('../../app')
const app = build();

describe('Test de ruta principal', () => {
  it("Test de retorno de valor exitoso de la UF del día", async () => {
    const res = await app.inject({
      method: 'GET',
      url: "/",
    });
    expect(res.statusCode).toEqual(200)
  });
})

describe('Test de ruta de pi', () => {
  it("Test de retorno exitoso de Pi con limite máximo de largo", async () => {
    const LIMIT_MAX_RANDOM = 3
    const res = await app.inject({
      method: 'GET',
      url: "/pi/",
      query: {
        random_limit: LIMIT_MAX_RANDOM
      }
    });
    expect(res.statusCode).toEqual(200)
    expect(res.json().PiCalc.length - 2).toBeLessThanOrEqual(LIMIT_MAX_RANDOM)
  });
})

