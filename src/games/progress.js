import startGame from '../index.js';
import { getRandomInteger } from '../utils.js';

const description = 'What number is missing in the progression?';

const startGetProgression = (startNum, difference) => {
  const numbers = [];
  for (let i = 0; i < 10; i += 1) {
    numbers.push(startNum + i * difference);
  }
  return numbers;
};

const maxRandomNumber = 100;
const minRandomNumber = 10;

const getQuestionAndAnswer = () => {
  const startNum = getRandomInteger(0, maxRandomNumber - 1);
  const difference = getRandomInteger(0, minRandomNumber) + 1;
  const progression = startGetProgression(startNum, difference);
  const hiddenPosition = getRandomInteger(0, progression.length - 1);
  const hiddenNum = progression[hiddenPosition];
  progression[hiddenPosition] = '..';
  const question = progression.join(' ');
  const correctAnswer = hiddenNum.toString();
  return { question, correctAnswer };
};

export default () => {
  startGame(description, getQuestionAndAnswer);
};
