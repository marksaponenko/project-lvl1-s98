export const greetingMessage = 'What is the result of the expression?';

const firstOperand = Math.floor(Math.random() * 25);
const secondOperand = Math.floor(Math.random() * 25);

const mult = `${firstOperand} * ${secondOperand}`;
const add = `${firstOperand} + ${secondOperand}`;
const subtr = `${firstOperand} + ${secondOperand}`;

const arrOfOperations = [mult, add, subtr];
export const operation = arrOfOperations[Math.floor(Math.random() * 3)];


export const getCorrectAnswer = () => {
  const strToArr = operation.split(' ');

  if (strToArr[1] === '*') {
    return firstOperand * secondOperand;
  }
  else if (strToArr[1] === '+') {
    return firstOperand + secondOperand;
  }
  return firstOperand - secondOperand;
};
