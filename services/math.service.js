const MIN_RANDOM = 1;
const START_SLICE = 2;

const randomLen = (lenMax) => parseInt(Math.random() * ((parseInt(lenMax) + MIN_RANDOM) - MIN_RANDOM) + MIN_RANDOM);

const piWithLen = (lenMax) => "3."+ Math.PI.toString().slice(START_SLICE, randomLen(parseInt(lenMax)) + START_SLICE).toString();

module.exports = {
  piWithLen
}