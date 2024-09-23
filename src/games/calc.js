import game from '../index.js';
import { randomInteger, randomSymbol } from '../funcInteger.js';

const description = 'What is the result of the expression?';

const minInteger = 0;
const maxInteger = 9;

const operators = ['+', '-', '*'];
const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error('Invalid operator');
  }
};

const getQuestionAndAnswer = () => {
  const num1 = randomInteger(minInteger, maxInteger);
  const num2 = randomInteger(minInteger, maxInteger);
  const operator = operators[randomSymbol(operators)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator).toString();
  return { question, correctAnswer };
};

export default () => {
  game(description, getQuestionAndAnswer);
};
