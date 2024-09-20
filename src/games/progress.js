import game from '../index.js';

const description = 'What number is missing in the progression?';

const Progression = () => {
  const startNum = Math.floor(Math.random() * 100);
  const difference = Math.floor(Math.random() * 10) + 1;
  const numbers = [];

  for (let i = 0; i < 10; i++) {
    numbers.push(startNum + i * difference);
  }
  return numbers;
};

const getQuestionAndAnswer = () => {
  const num = Progression();
  const hiddenPosition = Math.floor(Math.random() * num.length);
  const hiddenNum = num[hiddenPosition];
  num[hiddenPosition] = '..';
  const question = `${num}`;
  const correctAnswer = hiddenNum.toString();
  return { question, correctAnswer };
};

export default () => {
  game(description, getQuestionAndAnswer);
};
