import game from '../index.js';

const description = 'What is the result of the expression?';

const randomInteger = (min, max) => {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const operators = ['+', '-', '*'];

const getQuestionAndAnswer = () => {
  const num1 = randomInteger(1, 9);
  const num2 = randomInteger(1, 9);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculator(num1, num2, operator).toString();
  return { question, correctAnswer };
};

const calculator = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
  }
};

export default () => {
  game(description, getQuestionAndAnswer);
};
