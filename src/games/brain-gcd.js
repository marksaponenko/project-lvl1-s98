import askQuestion from '..';

export const greetingMessage = 'Find the greatest common divisor of given numbers.';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  let i = 2;

  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
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

const getGreatestDivisor = (pairOfNumbers) => {
  const strToArr = pairOfNumbers.split(' ');
  const firstNumber = strToArr[0];
  const secondNumber = strToArr[1];

  return findGreatestDivisor(firstNumber, secondNumber);
};

export const startGame = () => askQuestion(getPairOfNumbers, getGreatestDivisor);
