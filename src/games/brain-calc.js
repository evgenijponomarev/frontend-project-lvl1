import getRandomNumber from '../get-random-number.js';

const operators = {
  '+': (number1, number2) => number1 + number2,
  '-': (number1, number2) => number1 - number2,
  '*': (number1, number2) => number1 * number2,
  '/': (number1, number2) => number1 / number2,
};

function getRandomOperatorLabel() {
  const operatorLabels = Object.keys(operators);

  return operatorLabels[getRandomNumber(0, operatorLabels.length - 1)];
}

export default {
  startMessage: 'What is the result of the expression?',
  getDataForRound: () => {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const operatorLabel = getRandomOperatorLabel();
    const correctAnswer = operators[operatorLabel](number1, number2).toString();

    return {
      questionMessage: `${number1} ${operatorLabel} ${number2}`,
      correctAnswer,
    };
  },
};
