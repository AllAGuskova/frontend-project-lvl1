#!/usr/bin/env node
import {
  getRandomNumber,
  askUser,
  parityCheck,
  parseUserAnswer,
  compareLogicalOperators,
} from '../src/even.js';
import greeting from '../src/cli.js';

const userName = greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let counterCorrectAnswers = 0;
for (let i = 0; i < 3; i += 1) {
  const randomNumber = getRandomNumber();

  console.log(`Question: ${randomNumber}`);

  const answer = askUser();

  const isOdd = parityCheck(randomNumber);

  const isAnswerYes = parseUserAnswer(answer);

  const isCorrectAnswer = compareLogicalOperators(isAnswerYes, isOdd, userName);
  if (isCorrectAnswer) {
    counterCorrectAnswers += 1;
  }
}
if (counterCorrectAnswers === 3) {
  console.log(`Congratulations, ${userName}!`);
}
