import startChallenge from '..';
import { getNewStr, getMaxNumber, getMinNumber, getRandomNumber } from '../helpers';

const getNumber = () => getRandomNumber(1000, 100);

const getBalanceNumber = (number) => {
  const numberToSrt = String(number);
  const maxNumber = getMaxNumber(numberToSrt);
  const minNumber = getMinNumber(numberToSrt);
  const newStr = getNewStr(maxNumber, minNumber, numberToSrt);
  if (maxNumber - minNumber > 1) {
    return getBalanceNumber(newStr);
  }
  return Number(numberToSrt);
};

const getGameDescription = () => 'Balance the given number.';
const startGame = () => startChallenge(getNumber, getBalanceNumber, getGameDescription);

export default startGame;
