import askQuestion from '..';
import { getRandomNumber, makePair } from '../helpers';

const getPairQuestionAnswer = () => {
  const question = getRandomNumber(100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return makePair(question, answer);
};

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const startGame = () => askQuestion(getPairQuestionAnswer, gameDescription);

export default startGame;
