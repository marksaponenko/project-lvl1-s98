import startChallenge from '..';
import { getRandomNumber } from '../helpers';


const getOperation = () => {
  const firstOperand = getRandomNumber(25);
  const secondOperand = getRandomNumber(25);

  const mult = `${firstOperand} * ${secondOperand}`;
  const add = `${firstOperand} + ${secondOperand}`;
  const subtr = `${firstOperand} - ${secondOperand}`;

  const arrOfOperations = [mult, add, subtr];
  return arrOfOperations[getRandomNumber(2)];
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
