import game from '../index.js';
import { randomInteger } from '../funcInteger.js';

const description = '"Answer yes" if given number is prime. Otherwise answer "no"';

const minInteger = 1;
const maxInteger = 9;

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = randomInteger(minInteger, maxInteger).toString();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => {
  game(description, getQuestionAndAnswer);
};
