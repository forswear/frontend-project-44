import game from '../index.js';
import { randomInteger } from '../funcInteger.js';

const description = 'Find the greatest common divisor of given numbers.';

const minInteger = 0;
const maxInteger = 9;

const gcd = (a, b) => {
  let i; // Initialize i
  while (b !== 0) { // Use a while loop instead of for
    i = b;
    // eslint-disable-next-line no-param-reassign
    b = a % b;
    // eslint-disable-next-line no-param-reassign
    a = i;
  }
  return Math.abs(a);
};

const getQuestionAndAnswer = () => {
  const num1 = randomInteger(minInteger, maxInteger);
  const num2 = randomInteger(minInteger, maxInteger);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return { question, correctAnswer };
};

export default () => {
  game(description, getQuestionAndAnswer);
};
