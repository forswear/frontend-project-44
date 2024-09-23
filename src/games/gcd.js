import game from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const randomInteger = (min, max) => {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const gcd = (a, b) => {
  for (let i; b !== 0; i++) {
    i = b;
    b = a % b;
    a = i;
  }
  return Math.abs(a);
};

const getQuestionAndAnswer = () => {
  const num1 = randomInteger(1, 9);
  const num2 = randomInteger(1, 9);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return { question, correctAnswer };
};

export default () => {
  game(description, getQuestionAndAnswer);
};
