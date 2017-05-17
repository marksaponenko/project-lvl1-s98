//const getFirstOperand = () => ;
//const getSecondOperand = () => Math.floor(Math.random() * 25);
//const firstOperand = getFirstOperand();
//const secondOperand = getSecondOperand();

export const getRandomExpression = (firstOperand, secondOperand) => {
  const mult = `${firstOperand} * ${secondOperand}`;
  const add = `${firstOperand} + ${secondOperand}`;
  const subtr = `${firstOperand} + ${secondOperand}`;
  const arrOfOperations = [mult, add, subtr];
  return arrOfOperations[Math.floor(Math.random() * 3)];
}
getRandomExpression(Math.floor(Math.random() * 25), Math.floor(Math.random() * 25))




//export const getCorrectAnswer = (firstOperand, secondOperand) => {
  //if (result[2] || result[3] === '*') {
    //return firstOperand * secondOperand;
  //}
  //else if (result[2] || result[3] === '+') {
    //return firstOperand + secondOperand;
  //}
  //return firstOperand - secondOperand;
//}
