import startChallenge from '..';

const getRandomNumber = () => Math.floor(Math.random() * 1000);

const balanceNumber = (arrOfNumbers) => {
  const arrLength = arrOfNumbers.length;
  const sortedArr = arrOfNumbers.sort();

  if ((sortedArr[arrLength - 1] - sortedArr[0]) > 1) {
    sortedArr[arrLength - 1] -= 1;
    sortedArr[0] = +sortedArr[0] + 1;

    return balanceNumber(sortedArr);
  }
  return Number(arrOfNumbers.join().replace(/,/g, ''));
};

const getBalancedNumber = (number) => {
  const arrOfNumbers = String(number).split('');
  return balanceNumber(arrOfNumbers);
};
const getGameDescription = () => console.log('Balance the given number.');
const startGame = () => startChallenge(getRandomNumber, getBalancedNumber, getGameDescription);

export default startGame;
