import game from '../index.js';
import { randomInteger } from '../funcInteger.js';

const description = '"yes" if given number is prime. Otherwise answer "no"';

const minInteger = 0;
const maxInteger = 9;

const isPrime = (num) => {
  // Проверяем, является ли число меньше 2
  if (num < 2) return false;

  // Проверяем делимость чисел от 2 до корня из num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if ((i !== num) && (num % i === 0)) {
      return false; // Если делится на i, то не простое
    }
  }

  return true; // Если не нашлось делителей, то число простое
};

const getQuestionAndAnswer = () => {
  const question = randomInteger(minInteger, maxInteger);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => {
  game(description, getQuestionAndAnswer);
};
