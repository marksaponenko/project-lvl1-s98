import readlineSync from 'readline-sync';
import { greetingMessage } from './games/brain-calc';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

let numberOfTries = 1;

const askQuestion = (getQuestion, getCorrectAnswer) => {
  const question = getQuestion();
  const correctAnswer = getCorrectAnswer(question);

  if (numberOfTries > 3) {
    return console.log(`Congratulations, ${userName}!`);
  }

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (correctAnswer == userAnswer) {
    numberOfTries += 1;
    console.log('Correct!');
    return askQuestion(getQuestion, getCorrectAnswer);
  }

  return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLets try again, ${userName}`);
};


export default askQuestion;
