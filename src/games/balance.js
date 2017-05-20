import startChallenge from '..';
import { getNewStr, getMaxNumber, getMinNumber, getRandomNumber } from '../helpers';

const getNumber = () => getRandomNumber(1000, 100);

const getBalanceNumber = (number) => {
  const maxNumber = getMaxNumber(number);
  const minNumber = getMinNumber(number);
  const newStr = getNewStr(maxNumber, minNumber, number);
  if (maxNumber - minNumber > 1) {
    return getBalanceNumber(newStr);
  }
  return number;
};

const gameDescription = 'Balance the given number.';
const startGame = () => startChallenge(getNumber, getBalanceNumber, gameDescription);

export default startGame;
