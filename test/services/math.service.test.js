const mathService = require('../../services/math.service');
const MAX_LENGTH_FOR_PI = 18

describe('Test Math service', () => {
  for (let index = 1; index < MAX_LENGTH_FOR_PI; index++) {
    const piLen = mathService.piWithLen(index).length - 2
    it(`should test that max length to PI is lesss to max ${index}`, () => {
      expect(piLen).toBeLessThanOrEqual(index)
    })
  }
})