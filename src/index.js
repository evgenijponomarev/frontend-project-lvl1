import readLineSync from 'readline-sync';

import ROUNDS_COUNT from './constants/rounds-count.js';

function getRandomNumber(min = -100, max = 100) {
  return Math.floor(
    Math.random() * (max - min) + min,
  );
}

function askQuestion(question) {
  console.log(`Question: ${question}`);

  return readLineSync.question('Your answer: ');
}

function showResultMessage(userAnswer, correctAnswer) {
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  } else {
    console.log('Correct!');
  }
}

function showFinalMessage(isSuccess, userName) {
  console.log(isSuccess ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
}

function startGame(runGameRound) {
  return !Array(ROUNDS_COUNT).fill().some(() => !runGameRound());
}

export default {
  getRandomNumber,
  askQuestion,
  showResultMessage,
  showFinalMessage,
  startGame,
};
