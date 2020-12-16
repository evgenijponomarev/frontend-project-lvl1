import readLineSync from 'readline-sync';

const NUMBER_BORDERS = {
  MIN: -100,
  MAX: 100,
};

function getRandomNumber() {
  return Math.floor(
    Math.random() * (NUMBER_BORDERS.MAX - NUMBER_BORDERS.MIN) + NUMBER_BORDERS.MIN,
  );
}

function askQuestion(number) {
  console.log(`Question: ${number}`);

  return readLineSync.question('Your answer: ');
}

function getCorrectAnswer(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}

function showResult(answer, correctAnswer, userName) {
  if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  } else {
    console.log('Correct!');
  }
}

function startGame(userName) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    const answer = askQuestion(number);
    const correctAnswer = getCorrectAnswer(number);
    showResult(answer, correctAnswer, userName);

    if (answer !== correctAnswer) return;
  }

  console.log(`Congratulations, ${userName}!`);
}

export default { startGame };
