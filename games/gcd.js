import { askUser, getRandomNumber } from '../src/index.js';

const greatestCommonDivisor = (randomNumber, randomNumber2) => {
  let divisor = randomNumber;
  let numberFirst = randomNumber;
  let numberSecond = randomNumber2;
  while (numberFirst % divisor !== 0 || numberSecond % divisor !== 0) {
    divisor -= 1;
  }
  if (numberSecond === 0) {
    return numberFirst;
  }
  if (numberFirst === 0) {
    return numberSecond;
  }
  if (numberFirst > numberSecond) {
    numberFirst -= numberSecond;
  } else {
    numberSecond -= numberFirst;
  }
  return divisor;
};

const checkCorrectness = (userAnswer, divisor, userName) => {
  let isAnswerCorrect;
  if (userAnswer === divisor) {
    console.log('Correct!');
    isAnswerCorrect = true;
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${divisor}'. Let's try again, ${userName}!`
    );
    isAnswerCorrect = false;
  }
  return isAnswerCorrect;
};

const game = (userName) => {
  const randomLimit = 100;
  const randomNumber = getRandomNumber(randomLimit);
  const randomNumber2 = getRandomNumber(randomLimit);

  console.log(`Question: ${randomNumber} ${randomNumber2}`);

  const userAnswer = Number(askUser());

  const divisor = greatestCommonDivisor(randomNumber, randomNumber2);

  const isCorrectAnswer = checkCorrectness(userAnswer, divisor, userName);

  return isCorrectAnswer;
};

const showRules = () => console.log('Find the greatest common divisor of given numbers.');

export { game, showRules };
