const MIN_RANDOM = 1;
const START_SLICE = 2;

const randomLen = (lenMax) => parseInt(Math.random() * ((lenMax + MIN_RANDOM) - MIN_RANDOM) + MIN_RANDOM);

exports.piWithLen = (lenMax) => "3."+ Math.PI.toString().slice(START_SLICE, randomLen(lenMax) + START_SLICE);
