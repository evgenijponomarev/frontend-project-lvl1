import readLineSync from 'readline-sync';

function welcomeUser() {
  const userName = readLineSync.question('Как вас зовут? ');

  console.log(`Привет, ${userName}!`);
}

export default { welcomeUser };
