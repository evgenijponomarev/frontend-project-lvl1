import game from '../index.js';

function isEven(number) {
  return number % 2 === 0;
}

function showStartMessage() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function getCorrectAnswer(number) {
  return isEven(number) ? 'yes' : 'no';
}

function runGameRound() {
  const number = game.getRandomNumber();
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
