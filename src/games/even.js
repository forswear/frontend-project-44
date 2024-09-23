import game from '../index.js';
import { randomInteger } from '../funcInteger.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const minInteger = 0;
const maxInteger = 9;

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = randomInteger(minInteger, maxInteger);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  game(description, getQuestionAndAnswer);
};
