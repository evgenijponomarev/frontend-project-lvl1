export function isEven(number) {
  return number % 2 === 0;
}

export function sum(number1, number2) {
  return number1 + number2;
}

export function subtract(number1, number2) {
  return number1 - number2;
}

export function multiply(number1, number2) {
  return number1 * number2;
}

export function divide(number1, number2) {
  return number1 / number2;
}

export function gcd(number1, number2) {
  const minNumber = Math.min(number1, number2);

  return new Array(Math.floor(minNumber / 2))
    .fill()
    .map((v, k) => k + 1)
    .concat(minNumber)
    .reverse()
    .find((v) => number1 % v === 0 && number2 % v === 0);
}

export function getMissedProgressionNumber(progression = [], replacer = '..') {
  const missedNumberIndex = progression.indexOf(replacer);
  const diff = missedNumberIndex > 1
    ? progression[1] - progression[0]
    : progression[3] - progression[2];

  return !missedNumberIndex
    ? progression[1] - diff
    : progression[missedNumberIndex - 1] + diff;
}

export default {
  isEven,
  sum,
  subtract,
  multiply,
  divide,
  gcd,
  getMissedProgressionNumber,
};
