import startChallenge from '..';
import { findNextProgressionMember, getRandomNumber, makePair } from '../helpers';


const getProgression = () => {
  const firstMember = getRandomNumber(10);
  const progressionLength = 10;
  const guessPlace = getRandomNumber(8, 2);
  const progressionStep = getRandomNumber(10, 1);

  let newStr = '';
  let counter = 1;
  let guessNumber = 0;

  while (counter <= progressionLength) {
    if (counter === 1) {
      newStr += String(firstMember);
      counter += 1;
    }
    if (counter === guessPlace) {
      newStr += ' ..';
      counter += 1;
      guessNumber = firstMember + ((guessPlace - 1) * progressionStep);
    }
    newStr += ` ${findNextProgressionMember(firstMember, counter, progressionStep)}`;
    counter += 1;
  }
  return makePair(newStr, guessNumber);
};

const getPairQuestionAnswer = () => getProgression();
const gameDescription = 'What number is missing in this progression?';
const startGame = () => startChallenge(getPairQuestionAnswer, gameDescription);

export default startGame;
