jest.mock('ioredis', () => require('ioredis-mock/jest'));

const build = require('../../app')
const app = build();

describe('Sample Test', () => {
  it("default root route", async () => {
    const res = await app.inject({
      method: 'GET',
      url: "/",
    });
    console.log(res)
    expect(res.statusCode).toEqual(200)
  });
})

describe('Sample Test', () => {
  it("Pi limit", async () => {
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

