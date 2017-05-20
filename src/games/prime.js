import startChallenge from '..';
import { isPrime } from './gcd';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const getCorrectAnswer = (number) => {
  if (isPrime(number)) {
    return 'yes';
  }
  return 'no';
};

const getGameDescription = () => '';
const startGame = () => startChallenge(getRandomNumber, getCorrectAnswer, getGameDescription);

export default startGame;
