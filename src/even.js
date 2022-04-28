import readlineSync from 'readline-sync';

const askUser = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};
const getRandomNumber = () => Math.floor(Math.random() * 100);

const parityCheck = (n) => n % 2 === 0;

const parseUserAnswer = (userAnswer) => {
  if (userAnswer === 'yes') {
    return true;
  }
  if (userAnswer === 'no') {
    return false;
  }
  return null;
};

const compareLogicalOperators = (isUserAnswerYes, isOddNumber, userName) => {
  if (isUserAnswerYes === null) {
    console.log(`Answer is wrong. Let's try again, ${userName}`);
    return false;
  }
  if (isUserAnswerYes && isOddNumber) {
    console.log('Correct!');
    return true;
  }
  if (!isUserAnswerYes && isOddNumber) {
    console.log(
      `'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}`,
    );
    return false;
  }
  if (isUserAnswerYes && !isOddNumber) {
    console.log(
      `'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}`,
    );
    return false;
  }
  if (!isUserAnswerYes && !isOddNumber) {
    console.log('Correct!');
    return true;
  }
};
export {
  getRandomNumber,
  askUser,
  parityCheck,
  parseUserAnswer,
  compareLogicalOperators,
};
