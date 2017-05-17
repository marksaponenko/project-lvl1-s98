import readlineSync from 'readline-sync';
import { getRandomNumber, getCorrectAnswer } from './games/brain-calc';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

let numberOfTries = 1;

const askQuestion = () => {
  if (numberOfTries > 3) {
    return console.log(`Congratulations, ${userName}!`);
  }

  const randomNumber = getRandomNumber();
  const correctAnswer = getCorrectAnswer(randomNumber);

  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (correctAnswer == userAnswer) {
    numberOfTries += 1;
    console.log('Correct!');
    return askQuestion();
  }
  return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLets try again, ${userName}`);
};

export default askQuestion;
