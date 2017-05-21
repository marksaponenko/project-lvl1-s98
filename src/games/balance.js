import startChallenge from '..';
import { getNewStr, getMaxElementInNumber, getMinElementInNumber, getRandomNumber, makePair } from '../helpers';

const getNumber = () => getRandomNumber(1000, 100);

const getBalanceNumber = (number) => {
  const maxNumber = getMaxElementInNumber(number);
  const minNumber = getMinElementInNumber(number);
  const newStr = getNewStr(maxNumber, minNumber, String(number));
  if (maxNumber - minNumber > 1) {
    return getBalanceNumber(newStr);
  }
  return number;
};

const getPairQuestionAnswer = () => {
  const question = getNumber();
  const answer = getBalanceNumber(question);
  return makePair(question, answer);
};
const gameDescription = 'Balance the given number.';
const startGame = () => startChallenge(getPairQuestionAnswer, gameDescription);

export default startGame;
