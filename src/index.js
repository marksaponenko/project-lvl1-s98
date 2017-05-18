import readlineSync from 'readline-sync';
import { greetingMessage } from './games/brain-balance';

console.log('Welcome to the Brain Games!');
console.log(greetingMessage);

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);



const askQuestion = (question, correctAnswer) => {
  const iter = (func, numberOfTries) => {
    if (numberOfTries > 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer == userAnswer) {

      console.log('Correct!');
      return iter(func, numberOfTries + 1)
    }
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLets try again, ${userName}`);
  }
  iter(askQuestion, 1)





};

export default askQuestion;
