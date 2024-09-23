import game from '../index.js';

const description = '"yes" if given number is prime. Otherwise answer "no"';

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

function randomInteger(min, max) {
  const rand = min + Math.random() * (max - min + 1);
  return Math.floor(rand);
}

const getQuestionAndAnswer = () => {
  const question = randomInteger(1, 9);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => {
  game(description, getQuestionAndAnswer);
};
