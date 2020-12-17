import game from '../index.js';
import {
  sum,
  subtract,
  multiply,
  divide,
} from '../math-functions.js';

const operators = {
  '+': sum,
  '-': subtract,
  '*': multiply,
  '/': divide,
};

function showStartMessage() {
  console.log('What is the result of the expression?');
}

function getRandomOperatorLabel() {
  const operatorLabels = Object.keys(operators);

  return operatorLabels[game.getRandomNumber(0, operatorLabels.length - 1)];
}

function getCorrectAnswer(number1, number2, operatorLabel) {
  return operators[operatorLabel](number1, number2).toString();
}

function runGameRound() {
  const number1 = game.getRandomNumber();
  const number2 = game.getRandomNumber();
  const operatorLabel = getRandomOperatorLabel();
  const userAnswer = game.askQuestion(`${number1} ${operatorLabel} ${number2}`);
  const correctAnswer = getCorrectAnswer(number1, number2, operatorLabel);

  game.showResultMessage(userAnswer, correctAnswer);

  return userAnswer === correctAnswer;
}

function play(userName) {
  showStartMessage();

  const result = game.startGame(runGameRound);

  game.showFinalMessage(result, userName);
}

export default play;
