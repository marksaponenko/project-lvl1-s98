import startChallenge from '..';
import { getRandomNumber, isPrime, makePair } from '../helpers';

const getNumber = () => getRandomNumber(100);

const getCorrectAnswer = (number) => {
  if (isPrime(number)) {
    return 'yes';
  }
  return 'no';
};

const getPairQuestionAnswer = () => makePair(getNumber, getCorrectAnswer);
const gameDescription = 'Answer "yes" if number is prime otherwise answer "no".';
const startGame = () => startChallenge(getPairQuestionAnswer, gameDescription);

export default startGame;
