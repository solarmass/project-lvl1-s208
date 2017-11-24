import { cons, car, cdr } from 'hexlet-pairs';
import { getRandomInt } from '../common';
import processGame from '../game-processor';

const gameTask = 'What is the result of the expression?';

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

const getRoundData = () => {
  const operation = getRandomOperation();
  const a = getOperand();
  const b = getOperand();
  const operator = getOperator(operation);

  const question = `${a} ${operator} ${b}`;
  const answer = execute(operation, a, b);

  return cons(question, answer);
};

const process = () => {
  processGame(gameTask, getRoundData);
};

export default process;
