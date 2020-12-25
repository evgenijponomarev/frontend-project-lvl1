import game from '../index.js';

const REPLACER = '..';
const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 10;
const MIN_PROGRESSION_DIFF = 1;
const MAX_PROGRESSION_DIFF = 5;

function getMissedProgressionNumber(progression = [], replacer = '..') {
  const missedNumberIndex = progression.indexOf(replacer);
  const diff = missedNumberIndex > 1
    ? progression[1] - progression[0]
    : progression[3] - progression[2];

  return !missedNumberIndex
    ? progression[1] - diff
    : progression[missedNumberIndex - 1] + diff;
}

function showStartMessage() {
  console.log('What number is missing in the progression?');
}

function getCorrectAnswer(progressionNumbers) {
  return getMissedProgressionNumber(progressionNumbers, REPLACER).toString();
}

function runGameRound() {
  const progressionLength = game.getRandomNumber(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH);
  const progressionDiff = game.getRandomNumber(MIN_PROGRESSION_DIFF, MAX_PROGRESSION_DIFF);
  const firstNumber = game.getRandomNumber();
  const hiddenNumberPosition = game.getRandomNumber(0, progressionLength);
  const progressionNumbers = new Array(progressionLength)
    .fill(firstNumber)
    .map((number, key) => number + progressionDiff * key);

  progressionNumbers[hiddenNumberPosition] = REPLACER;

  const userAnswer = game.askQuestion(progressionNumbers.join(' '));
  const correctAnswer = getCorrectAnswer(progressionNumbers);

  game.showResultMessage(userAnswer, correctAnswer);

  return userAnswer === correctAnswer;
}

function play(userName) {
  showStartMessage();

  const result = game.startGame(runGameRound);

  game.showFinalMessage(result, userName);
}

export default play;
