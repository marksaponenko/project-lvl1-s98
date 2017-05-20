import startChallenge from '..';
import { isPrime } from './gcd';
import { getRandomNumber } from '../helpers';

const getNumber = () => getRandomNumber(100);

const getCorrectAnswer = (number) => {
  if (isPrime(number)) {
    return 'yes';
  }
  return 'no';
};

const getGameDescription = () => '';
const startGame = () => startChallenge(getNumber, getCorrectAnswer, getGameDescription);

export default startGame;
