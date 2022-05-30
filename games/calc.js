import { askUser, getRandomNumber } from '../src/index.js';

const getRandomElement = (operators) => {
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const operators = ['+', '-', '*'];

const calculate = (randomNumber, randomNumber2, operator) => {
  switch (operator) {
    case '+':
      return randomNumber + randomNumber2;
    case '-':
      return randomNumber - randomNumber2;
    case '*':
      return randomNumber * randomNumber2;
    default:
      return NaN;
  }
};

const checkCorrectness = (userAnswer, computedMathExpression, userName) => {
  let isAnswerCorrect;
  if (userAnswer === computedMathExpression) {
    console.log('Correct!');
    isAnswerCorrect = true;
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${computedMathExpression}'. Let's try again, ${userName}!`,
    );
    isAnswerCorrect = false;
  }
  return isAnswerCorrect;
};

const game = (userName) => {
  const randomLimit = 100;
  const randomNumber = getRandomNumber(randomLimit);
  const randomNumber2 = getRandomNumber(randomLimit);
  const randomOperator = getRandomElement(operators);

  console.log(`Question: ${randomNumber} ${randomOperator} ${randomNumber2}`);

  const userAnswer = Number(askUser());

  const computedMathExpression = calculate(
    randomNumber,
    randomNumber2,
    randomOperator,
  );

  const isCorrectAnswer = checkCorrectness(
    userAnswer,
    computedMathExpression,
    userName,
  );
  return isCorrectAnswer;
};

const showRules = () => console.log('What is the result of the expression?');

export { game, showRules };
