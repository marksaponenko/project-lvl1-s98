import startChallenge from '..';
import { getRandomNumber, makePair, getBalanceNumber } from '../helpers';

const getPairQuestionAnswer = () => {
  const question = getRandomNumber(1000, 100);
  const answer = getBalanceNumber(question);
  return makePair(question, answer);
};
const gameDescription = 'Balance the given number.';
const startGame = () => startChallenge(getPairQuestionAnswer, gameDescription);

export default startGame;
