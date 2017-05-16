import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
const choseRandomNumber = () => Math.floor(Math.random() * 100);
const askQuestion = (numberOfTries) => {
  const randomNumber = choseRandomNumber();
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (numberOfTries >= 3) {
    return console.log(`Correct!\nCongratulations, ${userName}!`);
  }
  else if (correctAnswer === userAnswer) {
    console.log('Correct!');
    return askQuestion(numberOfTries + 1);
  }
  return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLets try again, ${userName}`);
};

export default askQuestion;
