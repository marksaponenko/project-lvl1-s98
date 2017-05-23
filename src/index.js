import readlineSync from 'readline-sync';
import { getQuestionFromPair, getAnswerFromPair } from './helpers';

console.log('Welcome to the Brain Games!');

const startChallenge = (getPairQuestionAnswer, gameDescription) => {
  console.log(gameDescription);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const iter = (func, counter) => {
    const game = getPairQuestionAnswer();
    const question = getQuestionFromPair(game);
    const correctAnswer = getAnswerFromPair(game);
    if (counter === 4) {
      return console.log(`Congratulations, ${userName}!`);
    }
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      return iter(func, counter + 1);
    }
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLets try again, ${userName}`);
  };

  return iter(getPairQuestionAnswer, 1);
};

export default startChallenge;
