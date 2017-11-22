import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const askUser = question => readlineSync.question(question);

const greetUser = () => {
  const name = askUser('May I have your name? ');

  console.log(`Hello, ${name}!\n`);

  return name;
};

const printWelcome = () => console.log('Welcome to Brain Games!');

const reportWinning = name => console.log(`Congratulations, ${name}!`);

const reportLosing = name => console.log(`Let's try again, ${name}!`);

export { greetUser, askUser, reportWinning, reportLosing, printWelcome, getRandomInt };
