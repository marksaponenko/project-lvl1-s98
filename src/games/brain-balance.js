export const greetingMessage = 'Balance the given number.'

export const randomNumber = Math.floor(Math.random() * (9999 - 100 + 1)) + 100;

const numberToArr = String(randomNumber).split('');

const balanceNumber = (arrOfNumbers) => {

  const arrLength = arrOfNumbers.length;
  const sortedArr = arrOfNumbers.sort();

  if ((sortedArr[arrLength - 1] - sortedArr[0]) > 1) {
    sortedArr[arrLength - 1] -= 1;
    sortedArr[0] = + sortedArr[0] + 1;

    return balanceNumber(sortedArr);
  }
  return arrOfNumbers.join().replace(/\,/g, "")
};

export const balancedNumber = balanceNumber(numberToArr);
