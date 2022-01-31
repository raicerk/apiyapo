const mathService = require('../../services/math.service');
const MAX_LENGTH_FOR_PI = 18

describe('Test de servicio matemático', () => {
  for (let index = 1; index < MAX_LENGTH_FOR_PI; index++) {

    it(`Test de valor máximo de pi usando como largo máximo el valor de ${index}`, () => {
      const piLen = mathService.piWithLen(index).length - 2
      expect(piLen).toBeLessThanOrEqual(index)
    })

    it(`Test de random con número máximo de ${index}`, () => {
      const randomLenTest = mathService.randomLen(index);
      expect(randomLenTest).toBeLessThanOrEqual(index);
    })
  }
})

