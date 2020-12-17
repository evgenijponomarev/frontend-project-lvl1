import game from '../index.js';
import { isPrime } from '../math-functions.js';

const MAX_NUMBER = 3571;

function showStartMessage() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
}

function getCorrectAnswer(number) {
  return isPrime(number) ? 'yes' : 'no';
}

function runGameRound() {
  const number = game.getRandomNumber(2, MAX_NUMBER);

  const userAnswer = game.askQuestion(number);
  const correctAnswer = getCorrectAnswer(number);

  game.showResultMessage(userAnswer, correctAnswer);

  return userAnswer === correctAnswer;
}

function play(userName) {
  showStartMessage();

  const result = game.startGame(runGameRound);

  game.showFinalMessage(result, userName);
}

export default play;
