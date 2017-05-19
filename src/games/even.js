import askQuestion from '..';

console.log('Answer "yes" if number even otherwise answer "no".');


const getRandomNumber = () => Math.floor(Math.random() * 100);

const getCorrectAnswer = randomNumber => (randomNumber % 2 === 0 ? 'yes' : 'no');
const startGame = () => askQuestion(getRandomNumber, getCorrectAnswer);

export default startGame;
