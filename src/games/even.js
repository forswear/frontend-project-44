import startGame from '../index.js';
import { getRandomInteger } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const minInteger = 0;
const maxInteger = 9;

const startIsEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomInteger(minInteger, maxInteger);
  const correctAnswer = startIsEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  startGame(description, getQuestionAndAnswer);
};
