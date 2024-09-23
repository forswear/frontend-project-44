const randomInteger = (min, max) => {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const randomSymbol = (operators) => Math.floor(Math.random() * operators.length);

export { randomInteger, randomSymbol };
