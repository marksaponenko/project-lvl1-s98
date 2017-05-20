import startChallenge from '..';
import { findNextProgressionMember, addNextMemberToStr, getRandomNumber } from '../helpers';

const progressionLength = 10;
const guessPlace = 6;

const getProgression = () => {
  const firstMember = getRandomNumber(10)
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
  const progAsArr = progression.split(' ');
  const member = progAsArr[guessPlace]
  - ((progAsArr[progressionLength - 1] - progAsArr[0]) / (progressionLength - 1));

  return member;
};

const getGameDescription = () => 'What number is missing in this progression?';
const startGame = () => startChallenge(getProgression, countProgressionMember, getGameDescription);

export default startGame;
