import startChallenge from '..';
import { getRandomNumber, makePair } from '../helpers';


const getPairQuestionAnswer = () => {
  const firstOperand = getRandomNumber(25);
  const secondOperand = getRandomNumber(25);
  let answer = 0;

  const mult = `${firstOperand} * ${secondOperand}`;
  const add = `${firstOperand} + ${secondOperand}`;
  const subtr = `${firstOperand} - ${secondOperand}`;

  const arrOfOperations = [mult, add, subtr];
  const question = arrOfOperations[getRandomNumber(2)];

  if (question === mult) {
    answer = firstOperand * secondOperand;
  }
  if (question === add) {
    answer = firstOperand + secondOperand;
  }
  if (question === subtr) {
    answer = firstOperand - secondOperand;
  }
  return makePair(question, answer);
};

const gameDescription = 'What is the result of the expression?';
const startGame = () => startChallenge(getPairQuestionAnswer, gameDescription);

export default startGame;
