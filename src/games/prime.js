import startGame from '../index.js';
import { getRandomInteger } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minInteger = 1;
const maxInteger = 9;

const startIsPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomInteger(minInteger, maxInteger).toString();
  const correctAnswer = startIsPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => {
  startGame(description, getQuestionAndAnswer);
};
