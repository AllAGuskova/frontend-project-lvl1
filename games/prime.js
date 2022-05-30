import { askUser, getRandomNumber } from "../src/index.js";

const isPrime = (number) => {
  for (let i = 2; i <= number; i += 1) {
    if (number % i === 0) {
      return false;
    }
    return number > 1;
  }
  return null;
};

const parseUserAnswer = (userAnswer) => {
  if (userAnswer === "yes") {
    return true;
  }
  if (userAnswer === "no") {
    return false;
  }
  return null;
};

const checkCorrectness = (
  isUserAnswerYes,
  numberPrime,
  userName,
  userAnswer
) => {
  let isAnswerCorrect = false;
  if ((isUserAnswerYes && numberPrime) || (!isUserAnswerYes && !numberPrime)) {
    console.log("Correct!");
    isAnswerCorrect = true;
  }
  if ((!isUserAnswerYes && numberPrime) || (isUserAnswerYes && !numberPrime)) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${
        numberPrime ? "yes" : "no"
      }'. Let's try again, ${userName}!`
    );
    isAnswerCorrect = false;
  }
  if (isUserAnswerYes === null) {
    console.log(`It is wrong answer ;(. Let's try again, ${userName}!`);
    isAnswerCorrect = false;
  }
  return isAnswerCorrect;
};

const game = (userName) => {
  const randomLimit = 100;
  const randomNumber = getRandomNumber(randomLimit);

  console.log(`Question: ${randomNumber}`);

  const userAnswer = askUser();

  const numberPrime = isPrime(randomNumber);

  const isAnswerYes = parseUserAnswer(userAnswer);

  const isCorrectAnswer = checkCorrectness(
    isAnswerYes,
    numberPrime,
    userName,
    userAnswer
  );
  return isCorrectAnswer;
};

const showRules = () =>
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');

export { game, showRules };
