import getRandomNumber from '../get-random-number.js';

function getGcd(number1, number2) {
  const minNumber = Math.min(number1, number2);

  return new Array(Math.floor(minNumber / 2))
    .fill()
    .map((v, k) => k + 1)
    .concat(minNumber)
    .reverse()
    .find((v) => number1 % v === 0 && number2 % v === 0);
}

export default {
  startMessage: 'Find the greatest common divisor of given numbers.',
  getDataForRound: () => {
    const number1 = getRandomNumber(1);
    const number2 = getRandomNumber(1);

    return {
      questionMessage: `${number1} ${number2}`,
      correctAnswer: getGcd(number1, number2).toString(),
    };
  },
};
