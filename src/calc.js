import readlineSync from "readline-sync";

const askUser = () => {
  const userAnswer = readlineSync.question("Your answer: ");
  return Number(userAnswer);
};
const getRandomNumber = () => Math.floor(Math.random() * 100);

const getRandomElement = (operators) => {
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const calculate = (randomNumber, randomNumber2, operator) => {
  switch (operator) {
    case "+":
      return randomNumber + randomNumber2;
    case "-":
      return randomNumber - randomNumber2;
    case "*":
      return randomNumber * randomNumber2;
    default:
      return NaN;
  }
};

const checkCorrectness = (userAnswer, computedMathExpression, userName) => {
  let isAnswerCorrect;
  if (userAnswer === computedMathExpression) {
    console.log("Correct!");
    isAnswerCorrect = true;
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${computedMathExpression}''. Let's try again, ${userName}!`
    );
    isAnswerCorrect = false;
  }
  return isAnswerCorrect;
};

export {
  askUser,
  getRandomNumber,
  getRandomElement,
  calculate,
  checkCorrectness,
};
