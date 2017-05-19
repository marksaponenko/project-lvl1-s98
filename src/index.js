import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

let userName = '';
let numberOfTries = 1;

const startChallenge = (getQuestion, getCorrectAnswer, getGameDescription) => {
  const gameDescription = getGameDescription();
  console.log(gameDescription);
  const question = getQuestion();
  const correctAnswer = getCorrectAnswer(question);

  if (numberOfTries === 1) {
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
  }
  if (numberOfTries > 3) {
    return console.log(`Congratulations, ${userName}!`);
  }

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (correctAnswer === Number(userAnswer)) {
    numberOfTries += 1;
    console.log('Correct!');
    return startChallenge(getQuestion, getCorrectAnswer);
  }

  return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLets try again, ${userName}`);
};


export default startChallenge;
