import readLineSync from 'readline-sync';
import cli from './cli.js';

const ROUNDS_COUNT = 3;

export default function play(game) {
  const userName = cli.greeting();

  console.log(game.taskDescription);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const { question, correctAnswer } = game.getRoundData();

    console.log(question);

    const userAnswer = readLineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
}
