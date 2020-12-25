import getRandomNumber from '../get-random-number.js';

function numberIsEven(number) {
  return number % 2 === 0;
}

export default {
  startMessage: 'Answer "yes" if the number is even, otherwise answer "no".',
  getDataForRound: () => {
    const number = getRandomNumber();

    return {
      questionMessage: number,
      correctAnswer: numberIsEven(number) ? 'yes' : 'no',
    };
  },
};
