import getRandomNumber from '../get-random-number.js';

const MAX_NUMBER = 3571;

function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
}

export default {
  taskDescription: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getRoundData: () => {
    const number = getRandomNumber(2, MAX_NUMBER);

    return {
      question: number,
      correctAnswer: isPrime(number) ? 'yes' : 'no',
    };
  },
};
