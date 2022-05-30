import { askUser, getRandomNumber } from '../src/index.js';

const arithmeticProgression = (firstElement, step) => {
  const arrayProgression = [firstElement];

  for (let i = 0; i < 10; i += 1) {
    const prevElement = arrayProgression[i];
    const nextElement = prevElement + step;
    arrayProgression.push(nextElement);
  }
  return arrayProgression;
};

const checkCorrectness = (userAnswer, hiddenElement, userName) => {
  let isAnswerCorrect;
  if (userAnswer === hiddenElement) {
    console.log('Correct!');
    isAnswerCorrect = true;
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenElement}'. Let's try again, ${userName}!`,
    );
    isAnswerCorrect = false;
  }
  return isAnswerCorrect;
};

const game = (userName) => {
  const firstElement = getRandomNumber(100);
  const step = getRandomNumber(10);
  const array = arithmeticProgression(firstElement, step);
  const hiddenIndex = getRandomNumber(array.length);
  const hiddenElement = array[hiddenIndex];

  array[hiddenIndex] = '..';

  console.log(`Question: ${array.join(' ')}`);

  const userAnswer = Number(askUser());

  const isCorrectAnswer = checkCorrectness(userAnswer, hiddenElement, userName);

  return isCorrectAnswer;
};

const showRules = () => console.log('What number is missing in the progression?');

export { game, showRules };
