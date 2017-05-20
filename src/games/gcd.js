import startChallenge from '..';
import { getNumberFromString, getRandomNumber, isPrime, makePair } from '../helpers';

const getNotPrimeNumber = (num) => {
  if (isPrime(num)) {
    return getNotPrimeNumber(num - 1);
  }
  return num;
};

const getPairOfNumbers = () => {
  const firstNumber = getNotPrimeNumber(getRandomNumber(100, 2));
  const secondNumber = getNotPrimeNumber(getRandomNumber(100, 2));

  return `${firstNumber} ${secondNumber}`;
};

const findGreatestDivisor = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return findGreatestDivisor(secondNumber, firstNumber % secondNumber);
};

const getCorrectAnswer = (pairOfNumbers) => {
  const firstNumber = getNumberFromString(pairOfNumbers, 0);
  const secondNumber = getNumberFromString(pairOfNumbers, 1);

  return findGreatestDivisor(firstNumber, secondNumber);
};

const getPairQuestionAnswer = () => {
  const question = getPairOfNumbers();
  const answer = getCorrectAnswer(question);
  return makePair(question, answer);
};
const gameDescription = 'Find the greatest common divisor of given numbers.';
const startGame = () => startChallenge(getPairQuestionAnswer, gameDescription);

export default startGame;
