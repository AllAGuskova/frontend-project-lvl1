#!/usr/bin/env node
import {
  askUser,
  getRandomNumber,
  getRandomElement,
  calculate,
  checkCorrectness,
} from "../src/calc.js";

import greeting from "../src/cli.js";

const userName = greeting();

console.log("What is the result of the expression?");

let counterCorrectAnswers = 0;
const operators = ["+", "-", "*"];

for (let i = 0; i < 3; i += 1) {
  const randomNumber = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const randomOperator = getRandomElement(operators);

  console.log(`Question: ${randomNumber} ${randomOperator} ${randomNumber2}`);

  const computedMathExpression = calculate(
    randomNumber,
    randomNumber2,
    randomOperator
  );

  const userAnswer = askUser();

  const isCorrectAnswer = checkCorrectness(
    userAnswer,
    computedMathExpression,
    userName
  );
  if (isCorrectAnswer) {
    counterCorrectAnswers += 1;
  }
}
if (counterCorrectAnswers === 3) {
  console.log(`Congratulations, ${userName}!`);
}
