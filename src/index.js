import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
const getRandomNumber = () => Math.floor(Math.random() * 100);
let numberOfTries = 1;
const askQuestion = () => {
  if (numberOfTries > 3) {
    return console.log(`Congratulations, ${userName}!`);
  }
  const randomNumber = getRandomNumber();
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (correctAnswer === userAnswer) {
    numberOfTries += 1;
    console.log('Correct!');
    return askQuestion();
  }
  return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLets try again, ${userName}`);
};

export default askQuestion;
