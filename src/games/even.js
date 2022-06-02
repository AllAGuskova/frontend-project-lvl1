import { askUser } from "../index.js";
import { randomInteger } from "../function.js";
const parityCheck = (n) => n % 2 === 0;

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
  isOddNumber,
  userName,
  userAnswer
) => {
  let isAnswerCorrect = false;
  if ((isUserAnswerYes && isOddNumber) || (!isUserAnswerYes && !isOddNumber)) {
    console.log("Correct!");
    isAnswerCorrect = true;
  }
  if ((!isUserAnswerYes && isOddNumber) || (isUserAnswerYes && !isOddNumber)) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${
        isOddNumber ? "yes" : "no"
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
  const randomNumber = randomInteger(1, 100);

  console.log(`Question: ${randomNumber}`);

  const userAnswer = askUser();

  const isOdd = parityCheck(randomNumber);

  const isAnswerYes = parseUserAnswer(userAnswer);

  const isCorrectAnswer = checkCorrectness(
    isAnswerYes,
    isOdd,
    userName,
    userAnswer
  );
  return isCorrectAnswer;
};

const showRules = () =>
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

export { game, showRules };
