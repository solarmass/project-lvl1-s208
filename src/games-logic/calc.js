import { cons, car, cdr } from 'hexlet-pairs';
import { getRandomInt, greetUser, askUser, reportWinning, reportLosing } from '../common';


const add = cons('+', (a, b) => a + b);

const multiply = cons('*', (a, b) => a * b);

const subtraction = cons('-', (a, b) => a - b);

const execute = (operation, a, b) => cdr(operation)(a, b);

const getOperator = operation => car(operation);

const getOperand = () => getRandomInt(1, 20);

const getRandomOperation = () => {
  const index = getRandomInt(0, 2);

  if (index === 2) {
    return subtraction;
  } else if (index === 1) {
    return multiply;
  }

  return add;
};

const processGame = (roundsCount) => {
  console.log('What is the result of the expression?\n');

  const name = greetUser();

  const processRounds = (roundsLast) => {
    const operation = getRandomOperation();
    const operator = getOperator(operation);
    const a = getOperand();
    const b = getOperand();

    console.log(`Question: ${a} ${operator} ${b}`);

    const answer = askUser('Your answer: ').toLowerCase();
    const correctAnswer = execute(operation, a, b);

    if (+answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

      return false;
    }

    console.log('Correct!');

    return roundsLast <= 1 ? true : processRounds(roundsLast - 1);
  };

  const success = processRounds(roundsCount);

  if (success) {
    reportWinning(name);
  } else {
    reportLosing(name);
  }
};

export default processGame;
