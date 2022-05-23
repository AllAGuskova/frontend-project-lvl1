import { askUser, getRandomNumber } from "../src/index.js";

const commonDivisorGreatest = (randomNumber, randomNumber2) => {
  let divisor = randomNumber;
  while (randomNumber % divisor !== 0 || randomNumber2 % divisor !== 0) {
    divisor = divisor - 1;
  }
  if (randomNumber2 === 0) {
    return randomNumber;
  }
  if (randomNumber === 0) {
    return randomNumber2;
  }
  if (randomNumber > randomNumber2) {
    randomNumber = randomNumber - randomNumber2;
  } else {
    randomNumber2 = randomNumber2 - randomNumber;
  }
  return divisor;
};

const checkCorrectness = (userAnswer, divisor, userName) => {
  let isAnswerCorrect;
  if (userAnswer === divisor) {
    console.log("Correct!");
    isAnswerCorrect = true;
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${divisor}''. Let's try again, ${userName}!`
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

  const divisor = commonDivisorGreatest(randomNumber, randomNumber2);

  const isCorrectAnswer = checkCorrectness(userAnswer, divisor, userName);

  return isCorrectAnswer;
};

const showRules = () =>
  console.log("Find the greatest common divisor of given numbers.");

export { game, showRules };
