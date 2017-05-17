

export const getRandomNumber = () => {
  const getFirstOperand = () => Math.floor(Math.random() * 25);
  const getSecondOperand = () => Math.floor(Math.random() * 25);

  const firstOperand = getFirstOperand();
  const secondOperand = getSecondOperand();

  const mult = `${firstOperand} * ${secondOperand}`;
  const add = `${firstOperand} + ${secondOperand}`;
  const subtr = `${firstOperand} + ${secondOperand}`;

  const arrOfOperations = [mult, add, subtr];
  const operation = arrOfOperations[Math.floor(Math.random() * 3)];

  return operation;
};

export const getCorrectAnswer = (operation) => {
  const strToArr = operation.split(' ');

  if (strToArr[1] === '*') {
    return Number(strToArr[0]) * Number(strToArr[2]);
  }
  else if (strToArr[1] === '+') {
    return Number(strToArr[0]) + Number(strToArr[2]);
  }
  return Number(strToArr[0]) - Number(strToArr[2]);
};
