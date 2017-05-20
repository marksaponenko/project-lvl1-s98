import startChallenge from '..';
import { getRandomNumber, isPrime } from '../helpers';

const getNumber = () => getRandomNumber(100);

const getCorrectAnswer = (number) => {
  if (isPrime(number)) {
    return 'yes';
  }
  return 'no';
};

const gameDescription = () => 'Answer "yes" if number is prime otherwise answer "no".';
const startGame = () => startChallenge(getNumber, getCorrectAnswer, gameDescription);

export default startGame;
