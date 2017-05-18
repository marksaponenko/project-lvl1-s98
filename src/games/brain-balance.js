import askQuestion from '..';

export const greetingMessage = 'Balance the given number.';

const getRandomNumber = () => Math.floor(Math.random() * 1000);

const balanceNumber = (arrOfNumbers) => {
  const arrLength = arrOfNumbers.length;
  const sortedArr = arrOfNumbers.sort();

  if ((sortedArr[arrLength - 1] - sortedArr[0]) > 1) {
    sortedArr[arrLength - 1] -= 1;
    sortedArr[0] = +sortedArr[0] + 1;

    return balanceNumber(sortedArr);
  }
  return arrOfNumbers.join().replace(/\,/g, '');
};

const getBalancedNumber = (number) => {
  const arrOfNumbers = String(number).split('');
  return balanceNumber(arrOfNumbers);
};

export const startGame = () => askQuestion(getRandomNumber, getBalancedNumber);
