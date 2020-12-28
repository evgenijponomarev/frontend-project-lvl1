import getRandomNumber from '../get-random-number.js';

const REPLACER = '..';
const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 10;
const MIN_PROGRESSION_DIFF = 1;
const MAX_PROGRESSION_DIFF = 5;

function getMissedProgressionNumber(progression = [], missedNumberIndex, diff) {
  return !missedNumberIndex
    ? progression[1] - diff
    : progression[missedNumberIndex - 1] + diff;
}

export default {
  taskDescription: 'What number is missing in the progression?',
  getRoundData: () => {
    const progressionLength = getRandomNumber(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH);
    const progressionDiff = getRandomNumber(MIN_PROGRESSION_DIFF, MAX_PROGRESSION_DIFF);
    const firstNumber = getRandomNumber();
    const missedNumberIndex = getRandomNumber(0, progressionLength);
    const progressionNumbers = new Array(progressionLength)
      .fill(firstNumber)
      .map((number, key) => number + progressionDiff * key);

    progressionNumbers[missedNumberIndex] = REPLACER;

    return {
      question: progressionNumbers.join(' '),
      correctAnswer: getMissedProgressionNumber(
        progressionNumbers,
        missedNumberIndex,
        progressionDiff,
      ).toString(),
    };
  },
};
