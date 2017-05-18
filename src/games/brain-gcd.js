export const greetingMessage = 'Find the greatest common divisor of given numbers.';

const isPrime = num => {
  if (num < 2) {
    return false;
  }

  let i = 2;

  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i++;
  }

  return true;
};

const getNotPrimeNumber = (num) => {
  if (isPrime(num)) {
    return getNotPrimeNumber(num - 1);
  }
  return num;
}

const firstNumber = getNotPrimeNumber(Math.floor(Math.random()*100));
const secondNumber = getNotPrimeNumber(Math.floor(Math.random()*100));
export const pairOfNumbers = `${firstNumber} ${secondNumber}`;

const findGreatestDivisor = (firstNimber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNimber;
  }
  return findGreatestDivisor(secondNumber, firstNimber % secondNumber);
}
export const greatestDivisor = findGreatestDivisor(firstNumber, secondNumber);
