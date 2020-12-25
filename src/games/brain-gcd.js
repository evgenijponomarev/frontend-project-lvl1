import game from '../index.js';

function getGcd(number1, number2) {
  const minNumber = Math.min(number1, number2);

  return new Array(Math.floor(minNumber / 2))
    .fill()
    .map((v, k) => k + 1)
    .concat(minNumber)
    .reverse()
    .find((v) => number1 % v === 0 && number2 % v === 0);
}

function showStartMessage() {
  console.log('Find the greatest common divisor of given numbers.');
}

function getCorrectAnswer(number1, number2) {
  return getGcd(number1, number2).toString();
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
