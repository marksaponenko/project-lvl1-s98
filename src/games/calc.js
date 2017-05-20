import startChallenge from '..';
import { getRandomNumber, getNumberFromString, getSymbolFromString } from '../helpers';


const getOperation = () => {
  const firstOperand = getRandomNumber(25);
  const secondOperand = getRandomNumber(25);

  const mult = `${firstOperand} * ${secondOperand}`;
  const add = `${firstOperand} + ${secondOperand}`;
  const subtr = `${firstOperand} - ${secondOperand}`;

  const arrOfOperations = [mult, add, subtr];
  return arrOfOperations[getRandomNumber(3)];
};

const getCorrectAnswer = (operation) => {
  const operator = getSymbolFromString(operation, 1);
  const firstNumber = getNumberFromString(operation, 0);
  const secondNumber = getNumberFromString(operation, 2);

  if (operator === '*') {
    return firstNumber * secondNumber;
  }
  if (operator === '+') {
    return firstNumber + secondNumber;
  }
  return firstNumber - secondNumber;
};

const getGameDescription = () => 'What is the result of the expression?';
const startGame = () => startChallenge(getOperation, getCorrectAnswer, getGameDescription);

export default startGame;
