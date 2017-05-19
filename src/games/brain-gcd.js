import startChallenge from '..';

console.log('Find the greatest common divisor of given numbers.');

const isPrime = (num) => {
  const iter = (number, divisor) => {
    if (number < 2) {
      return false;
    }
    if (divisor === 1) {
      return true;
    }
    if (number % divisor === 0) {
      return false;
    }
    return iter(number, divisor - 1);
  };
  return iter(num, Math.round(num / 2));
};

const getNotPrimeNumber = (num) => {
  if (isPrime(num)) {
    return getNotPrimeNumber(num - 1);
  }
  return num;
};

const getPairOfNumbers = () => {
  const firstNumber = getNotPrimeNumber(Math.floor(Math.random() * 100));
  const secondNumber = getNotPrimeNumber(Math.floor(Math.random() * 100));

  return `${firstNumber} ${secondNumber}`;
};

const findGreatestDivisor = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return findGreatestDivisor(secondNumber, firstNumber % secondNumber);
};

const getCorrectAnswer = (pairOfNumbers) => {
  const strToArr = pairOfNumbers.split(' ');
  const firstNumber = strToArr[0];
  const secondNumber = strToArr[1];

  return findGreatestDivisor(firstNumber, secondNumber);
};
const getGameDescription = () => 'Find the greatest common divisor of given numbers.';
const startGame = () => startChallenge(getPairOfNumbers, getCorrectAnswer, getGameDescription);

export default startGame;
