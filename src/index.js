import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!')
const libraryRequire = require('readline-sync');
const result = () => {
  const userName = libraryRequire.question('May I have your name? ');
  return 'Hello, ' + userName + '!'
}
console.log(result())