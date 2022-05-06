import readlineSync from "readline-sync";

const askUser = () => {
  const userAnswer = readlineSync.question("Your answer: ");
  return userAnswer;
};
const getRandomNumber = () => Math.floor(Math.random() * 100);

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
export {
  getRandomNumber,
  askUser,
  parityCheck,
  parseUserAnswer,
  checkCorrectness,
};
