import askQuestion from '..';

export const greetingMessage = 'Answer "yes" if number even otherwise answer "no".';


const getRandomNumber = () => Math.floor(Math.random() * 100);

const getCorrectAnswer = randomNumber => (randomNumber % 2 === 0 ? 'yes' : 'no');
export const startGame = () => askQuestion(getRandomNumber, getCorrectAnswer);
