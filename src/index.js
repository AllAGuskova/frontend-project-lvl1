import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const askUser = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const getRandomNumber = (n) => Math.floor(Math.random() * n);

const runGame = (game, showRules) => {
  const userName = greeting();
  showRules();
  let correctAnswersCounter = 0;
  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const isCorrectAnswer = game(userName);

    if (isCorrectAnswer) {
      correctAnswersCounter += 1;
    }
  }
  if (correctAnswersCounter === rounds) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export {
  runGame, greeting, askUser, getRandomNumber,
};
