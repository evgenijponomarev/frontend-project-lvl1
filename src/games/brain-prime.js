import getRandomNumber from '../get-random-number.js';

const MAX_NUMBER = 3571;

function numberIsPrime(number) {
  if (number < 2) return false;

  return !new Array(Math.floor(number / 2))
    .fill()
    .map((v, k) => k + 1)
    .slice(1)
    .some((v) => number % v === 0);
}

export default {
  startMessage: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getDataForRound: () => {
    const number = getRandomNumber(2, MAX_NUMBER);

    return {
      questionMessage: number,
      correctAnswer: numberIsPrime(number) ? 'yes' : 'no',
    };
  },
};
