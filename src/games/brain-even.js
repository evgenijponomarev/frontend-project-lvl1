import getRandomNumber from '../get-random-number.js';

function isEven(number) {
  return number % 2 === 0;
}

export default {
  taskDescription: 'Answer "yes" if the number is even, otherwise answer "no".',
  getRoundData: () => {
    const number = getRandomNumber();

    return {
      question: number,
      correctAnswer: isEven(number) ? 'yes' : 'no',
    };
  },
};
