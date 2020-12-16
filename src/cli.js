import readLineSync from 'readline-sync';

function welcomeUser() {
  console.log('Welcome to the Brain Games!\n');

  const userName = readLineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  return userName;
}

export default { welcomeUser };
