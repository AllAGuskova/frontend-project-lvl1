import { askUser, getRandomNumber } from "../src/index.js";

const parityCheck = (n) => n % 2 === 0;

const parseUserAnswer = (userAnswer) => {
  if (userAnswer.toLowerCase() === "yes") {
    return true;
  }
  if (userAnswer.toLowerCase() === "no") {
    return false;
  }
  return null;
};

const checkCorrectness = (isUserAnswerYes, isOddNumber, userName) => {
  let isAnswerCorrect = false;
  if (isUserAnswerYes === null) {
    console.log(`It is wrong answer ;(. Let's try again, ${userName}!`);
    isAnswerCorrect = false;
  } else if (
    (isUserAnswerYes && isOddNumber) ||
    (!isUserAnswerYes && !isOddNumber)
  ) {
    console.log("Correct!");
    isAnswerCorrect = true;
  } else if (
    (!isUserAnswerYes && isOddNumber) ||
    (isUserAnswerYes && !isOddNumber)
  ) {
    console.log(
      `'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`
    );
    isAnswerCorrect = false;
  }
  return isAnswerCorrect;
};

const game = (userName) => {
  const randomLimit = 100;
  const randomNumber = getRandomNumber(randomLimit);

  console.log(`Question: ${randomNumber}`);

  const answer = askUser();

  const isOdd = parityCheck(randomNumber);

  const isAnswerYes = parseUserAnswer(answer);

  const isCorrectAnswer = checkCorrectness(isAnswerYes, isOdd, userName);
  return isCorrectAnswer;
};

const showRules = () =>
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

export { game, showRules };
