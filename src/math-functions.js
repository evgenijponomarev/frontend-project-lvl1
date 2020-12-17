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

export default {
  sum,
  subtract,
  multiply,
  divide,
  gcd,
};
