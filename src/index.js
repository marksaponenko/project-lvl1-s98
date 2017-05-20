import readlineSync from 'readline-sync';
import { getQuestionFromPair, getAnswerFromPair } from './helpers';

console.log('Welcome to the Brain Games!');

let userName = '';
let numberOfTries = 1;

const startChallenge = (getPairQuestionAnswer, gameDescription) => {
  const game = getPairQuestionAnswer();

  const question = getQuestionFromPair(game)();
  const correctAnswer = getAnswerFromPair(game)(question);
  if (numberOfTries === 1) {
    console.log(gameDescription);
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
  }
  if (numberOfTries > 3) {
    return console.log(`Congratulations, ${userName}!`);
  }

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (String(correctAnswer) === userAnswer) {
    numberOfTries += 1;
    console.log('Correct!');
    return startChallenge(getPairQuestionAnswer);
  }

  return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLets try again, ${userName}`);
};


export default startChallenge;
