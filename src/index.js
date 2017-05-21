import readlineSync from 'readline-sync';
import { getQuestionFromPair, getAnswerFromPair } from './helpers';

console.log('Welcome to the Brain Games!');

let userName = '';

const startChallenge = (getPairQuestionAnswer, gameDescription) => {
  console.log(gameDescription);
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const iter = (func, counter) => {
    const game = getPairQuestionAnswer();
    const question = getQuestionFromPair(game);
    const correctAnswer = getAnswerFromPair(game);
    while (counter <= 3) {
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');

      if (correctAnswer === userAnswer) {
        console.log('Correct!');
        return iter(func, counter + 1);
      }
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLets try again, ${userName}`);
    }
    return console.log(`Congratulations, ${userName}!`);
  };
  return iter(getPairQuestionAnswer, 1);
};

export default startChallenge;
