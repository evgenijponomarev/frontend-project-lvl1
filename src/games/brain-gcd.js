import game from '../index.js';
import { gcd } from '../math-functions.js';

function showStartMessage() {
  console.log('Find the greatest common divisor of given numbers.');
}

function getCorrectAnswer(number1, number2) {
  return gcd(number1, number2).toString();
}

function runGameRound() {
  const number1 = game.getRandomNumber(1);
  const number2 = game.getRandomNumber(1);
  const userAnswer = game.askQuestion(`${number1} ${number2}`);
  const correctAnswer = getCorrectAnswer(number1, number2);

  game.showResultMessage(userAnswer, correctAnswer);

  return userAnswer === correctAnswer;
}

function play(userName) {
  showStartMessage();

  const result = game.startGame(runGameRound);

  game.showFinalMessage(result, userName);
}

export default play;
