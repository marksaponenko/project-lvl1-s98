import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!')
const printUsername = () => {
  const userName = readlineSync.question('May I have your name? ');
  return `Hello, ${userName}!`
}
export default printUsername