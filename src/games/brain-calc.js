import getRandomNumber from '../get-random-number.js';

const operations = {
  '+': (number1, number2) => number1 + number2,
  '-': (number1, number2) => number1 - number2,
  '*': (number1, number2) => number1 * number2,
  '/': (number1, number2) => number1 / number2,
};

function getRandomOperationLabel() {
  const operationLabels = Object.keys(operations);

  return operationLabels[getRandomNumber(0, operationLabels.length - 1)];
}

export default {
  taskDescription: 'What is the result of the expression?',
  getRoundData: () => {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const operationLabel = getRandomOperationLabel();
    const correctAnswer = operations[operationLabel](number1, number2).toString();

    return {
      question: `${number1} ${operationLabel} ${number2}`,
      correctAnswer,
    };
  },
};
