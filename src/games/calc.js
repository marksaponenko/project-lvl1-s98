import startChallenge from '..';

const getOperation = () => {
  const firstOperand = Math.floor(Math.random() * 25);
  const secondOperand = Math.floor(Math.random() * 25);

  const mult = `${firstOperand} * ${secondOperand}`;
  const add = `${firstOperand} + ${secondOperand}`;
  const subtr = `${firstOperand} - ${secondOperand}`;

  const arrOfOperations = [mult, add, subtr];
  return arrOfOperations[Math.floor(Math.random() * 3)];
};

const getCorrectAnswer = (operation) => {
  const strToArr = operation.split(' ');

  if (strToArr[1] === '*') {
    return Number(strToArr[0]) * Number(strToArr[2]);
  }
  if (strToArr[1] === '+') {
    return Number(strToArr[0]) + Number(strToArr[2]);
  }
  return Number(strToArr[0]) - Number(strToArr[2]);
};

const getGameDescription = () => 'What is the result of the expression?';
const startGame = () => startChallenge(getOperation, getCorrectAnswer, getGameDescription);

export default startGame;
