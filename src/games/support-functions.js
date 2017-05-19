export const makeNewStr = (maxNumber, minNumber, str) => {
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

export const max = (number) => {
  const numToStr = String(number);
  const iter = (str, acc, count) => {
    while (count < str.length) {
      if (str[count] > acc) {
        return iter(str, str[count], count + 1);
      }
      return iter(str, acc, count + 1);
    }
    return acc;
  };
  return iter(numToStr, 0, 0);
};

export const min = (number) => {
  const numToStr = String(number);
  const iter = (str, acc, count) => {
    while (count < str.length) {
      if (str[count] < acc) {
        return iter(str, str[count], count + 1);
      }
      return iter(str, acc, count + 1);
    }
    return acc;
  };
  return iter(numToStr, 9, 0);
};
