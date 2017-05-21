import { cons, car, cdr } from 'hexlet-pairs';

export const getNewStr = (maxNumber, minNumber, str) => {
  const newMaxNumber = maxNumber - 1;
  const newMinNumber = +minNumber + 1;
  const indexOfMinNumber = str.indexOf(minNumber);
  const indexOfMaxNumber = str.indexOf(maxNumber);

  let newStr = '';
  for (let i = 0; i <= str.length - 1; i += 1) {
    if (i === indexOfMinNumber) {
      newStr += newMinNumber;
    }
    if (i === indexOfMaxNumber) {
      newStr += newMaxNumber;
    }
    if (i !== indexOfMinNumber && i !== indexOfMaxNumber) {
      newStr += str[i];
    }
  }
  return newStr.split('').sort().join('');
};

export const getMaxElementInNumber = (number) => {
  const numToStr = String(number);
  const iter = (str, acc, count) => {
    while (count < str.length) {
      if (str[count] > acc) {
        return iter(str, str[count], count + 1);
      }
      return iter(str, acc, count + 1);
    }
    return String(acc);
  };
  return iter(numToStr, 0, 0);
};

export const getMinElementInNumber = (number) => {
  const numToStr = String(number);
  const iter = (str, acc, count) => {
    while (count < str.length) {
      if (str[count] < acc) {
        return iter(str, str[count], count + 1);
      }
      return iter(str, acc, count + 1);
    }
    return String(acc);
  };
  return iter(numToStr, 9, 0);
};

export const findNextProgressionMember = (firstMember, curMemberIndex, progressionStep) => {
  const nextMember = ((curMemberIndex - 1) * progressionStep) + firstMember;
  return String(nextMember);
};

export const addNextMemberToStr = (str, nextMember, counter) => {
  if (counter === 1) {
    return `${str}${nextMember}`;
  }
  return `${str} ${nextMember}`;
};

export const getNumberFromString = (str, numberIndex) => Number(str.split(' ')[numberIndex]);

export const getRandomNumber = (max, min = 0) => {
  let rand = min + (Math.random() * ((max + 1) - min));
  rand = Math.floor(rand);
  return rand;
};

export const getSymbolFromString = (str, numberIndex) => str.split(' ')[numberIndex];

export const isPrime = (num) => {
  const iter = (number, divisor) => {
    if (number < 2) {
      return false;
    }
    if (divisor === 1) {
      return true;
    }
    if (number % divisor === 0) {
      return false;
    }
    return iter(number, divisor - 1);
  };
  return iter(num, Math.round(num / 2));
};

export const makePair = (question, answer) => cons(question, answer);
export const getQuestionFromPair = pair => car(pair);
export const getAnswerFromPair = pair => cdr(pair);
