import startChallenge from '..';
import { getRandomNumber, isPrime, makePair } from '../helpers';

const getPairQuestionAnswer = () => {
  const question = getRandomNumber(100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return makePair(question, answer);
};

const gameDescription = 'Answer "yes" if number is prime otherwise answer "no".';
const startGame = () => startChallenge(getPairQuestionAnswer, gameDescription);

export default startGame;
