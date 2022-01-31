const MIN_RANDOM = 1;
const START_SLICE = 2;

/**
 * Función que retorna un número random usando como máximo valor el valor ingresado como parametro
 * @param {*} lenMax 
 * @returns 
 */
const randomLen = (lenMax) => parseInt(Math.random() * ((parseInt(lenMax) + MIN_RANDOM) - MIN_RANDOM) + MIN_RANDOM);

/**
 * Función que retorna el valor de PI con un largo máximo según el parametro entregado
 * @param {*} lenMax 
 * @returns 
 */
const piWithLen = (lenMax) => "3."+ Math.PI.toString().slice(START_SLICE, randomLen(parseInt(lenMax)) + START_SLICE).toString();

module.exports = {
  piWithLen,
  randomLen
}