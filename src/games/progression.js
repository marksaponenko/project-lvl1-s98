import startChallenge from '..';
import { findNextProgressionMember, addNextMemberToStr, getRandomNumber, getNumberFromString } from '../helpers';

const progressionLength = 10;
const guessPlace = 6;

const getProgression = () => {
  const firstMember = getRandomNumber(10);
  const progressionStep = getRandomNumber(10, 1);

  const iter = (string, counter) => {
    if (counter === 1) {
      const newStr = addNextMemberToStr(string, String(firstMember), counter);
      return iter(newStr, counter + 1);
    }

    if (counter === guessPlace) {
      const newStr = addNextMemberToStr(string, '..');
      return iter(newStr, counter + 1);
    }

    if (counter > progressionLength) {
      return string;
    }

    const nextMember = findNextProgressionMember(firstMember, counter, progressionStep);
    const newStr = addNextMemberToStr(string, nextMember);
    return iter(newStr, counter + 1);
  };
  return iter('', 1);
};

const countProgressionMember = (progression) => {
  const nextMember = getNumberFromString(progression, guessPlace);
  const firstMember = getNumberFromString(progression, 0);
  const lastMember = getNumberFromString(progression, progressionLength - 1);

  const member = nextMember - ((lastMember - firstMember) / (progressionLength - 1));
  return member;
};

const getGameDescription = () => 'What number is missing in this progression?';
const startGame = () => startChallenge(getProgression, countProgressionMember, getGameDescription);

export default startGame;
