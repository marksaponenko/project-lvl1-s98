import startChallenge from '..';
import { makeNewStr, max, min } from './support-functions';

const getRandomNumber = () => Math.floor(Math.random() * 1000);

const getBalanceNumber = (number) => {
  const numberToSrt = String(number);
  const maxNumber = max(numberToSrt);
  const minNumber = min(numberToSrt);
  const newStr = makeNewStr(maxNumber, minNumber, numberToSrt);
  if (maxNumber - minNumber > 1) {
    return getBalanceNumber(newStr);
  }
  return Number(numberToSrt);
};

const getGameDescription = () => 'Balance the given number.';
const startGame = () => startChallenge(getRandomNumber, getBalanceNumber, getGameDescription);

export default startGame;
