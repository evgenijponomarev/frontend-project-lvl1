import game from '../index.js';

const MAX_NUMBER = 3571;

function numberIsPrime(number) {
  if (number < 2) return false;

  return !new Array(Math.floor(number / 2))
    .fill()
    .map((v, k) => k + 1)
    .slice(1)
    .some((v) => number % v === 0);
}

function showStartMessage() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
}

function getCorrectAnswer(number) {
  return numberIsPrime(number) ? 'yes' : 'no';
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
