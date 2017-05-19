import startChallenge from '..';
import { getNewStr, getMaxNumber, getMinNumber } from '../helpers';

const getRandomNumber = () => Math.floor(Math.random() * 1000);

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
const startGame = () => startChallenge(getRandomNumber, getBalanceNumber, getGameDescription);

export default startGame;
