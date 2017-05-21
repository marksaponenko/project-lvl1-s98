import startChallenge from '..';
import { getRandomNumber, makePair, findGreatestDivisor, getNotPrimeNumber } from '../helpers';

const getPairQuestionAnswer = () => {
  const firstNumber = getNotPrimeNumber(getRandomNumber(100, 2));
  const secondNumber = getNotPrimeNumber(getRandomNumber(100, 2));

  const question = `${firstNumber} ${secondNumber}`;

  const answer = findGreatestDivisor(firstNumber, secondNumber);

  return makePair(question, String(answer));
};

const gameDescription = 'Find the greatest common divisor of given numbers.';
const startGame = () => startChallenge(getPairQuestionAnswer, gameDescription);

export default startGame;
