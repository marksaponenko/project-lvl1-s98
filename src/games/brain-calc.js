const getFirstOperand = () => Math.floor(Math.random() * 25);
const getSecondOperand = () => Math.floor(Math.random() * 25);
const firstOperand = getFirstOperand();
const secondOperand = getSecondOperand();
const mult = `${firstOperand} * ${secondOperand}`;
const add = `${firstOperand} + ${secondOperand}`;
const subtr = `${firstOperand} + ${secondOperand}`;
const arrOfOperations = [mult, add, subtr];
const result = arrOfOperations[Math.floor(Math.random() * 3)];
export const getRandomExpression = () => result;




export const getCorrectAnswer = () => {
  if (result === mult) {
    return firstOperand * secondOperand;
  }
  else if (result === add) {
    return firstOperand + secondOperand;
  }
  return firstOperand - secondOperand;
}
