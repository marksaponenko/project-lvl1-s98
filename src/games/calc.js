import startChallenge from '..';
import { getRandomNumber, getNumberFromString, getSymbolFromString, makePair } from '../helpers';


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

const getPairQuestionAnswer = () => {
  const question = getOperation();
  const answer = getCorrectAnswer(question);
  return makePair(question, answer);
};

const gameDescription = 'What is the result of the expression?';
const startGame = () => startChallenge(getPairQuestionAnswer, gameDescription);

export default startGame;
