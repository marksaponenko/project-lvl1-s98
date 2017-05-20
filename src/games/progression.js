import startChallenge from '..';
import { findNextProgressionMember, getRandomNumber, getNumberFromString, makePair } from '../helpers';

const progressionLength = 10;
const guessPlace = getRandomNumber(8, 2);
const progressionStep = getRandomNumber(10, 1);
const getProgression = () => {
  const firstMember = getRandomNumber(10);

  let newStr = '';
  let counter = 1;

  while (counter <= progressionLength) {
    if (counter === 1) {
      newStr += String(firstMember);
      counter += 1;
    }
    if (counter === guessPlace) {
      newStr += ' ..';
      counter += 1;
    }
    newStr += ` ${findNextProgressionMember(firstMember, counter, progressionStep)}`;
    counter += 1;
  }
  return newStr;
};

const countProgressionMember = (progression) => {
  const nextMember = getNumberFromString(progression, guessPlace);
  return nextMember - progressionStep;
};


const getPairQuestionAnswer = () => {
  const question = getProgression();
  const answer = countProgressionMember(question);
  return makePair(question, answer);
};
const gameDescription = 'What number is missing in this progression?';
const startGame = () => startChallenge(getPairQuestionAnswer, gameDescription);

export default startGame;
