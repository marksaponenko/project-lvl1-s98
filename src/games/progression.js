import startChallenge from '..';
import { findNextProgressionMember, getRandomNumber, makePair } from '../helpers';


const getPairQuestionAnswer = () => {
  const firstMember = getRandomNumber(10);
  const progressionLength = 10;
  const guessPlace = getRandomNumber(8, 2);
  const progressionStep = getRandomNumber(10, 1);

  let progression = 'firstMember';
  let counter = 2;
  let guessNumber = 0;

  while (counter <= progressionLength) {
    if (counter === guessPlace) {
      progression += ' ..';
      counter += 1;
      guessNumber = firstMember + ((guessPlace - 1) * progressionStep);
    }
    progression += ` ${findNextProgressionMember(firstMember, counter, progressionStep)}`;
    counter += 1;
  }
  return makePair(progression, String(guessNumber));
};

const gameDescription = 'What number is missing in this progression?';
const startGame = () => startChallenge(getPairQuestionAnswer, gameDescription);

export default startGame;
