import { cons, car, cdr } from 'hexlet-pairs';
import { getRandomInt } from '../common';
import getProcessGame from '../processors/game-processor';
import getProcessRounds from '../processors/rounds-processor';

const gameTask = 'What is the result of the expression?\n';

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

const getExecWithData = () => {
  const operation = getRandomOperation();
  const a = getOperand();
  const b = getOperand();

  return func => func(a, b, operation);
};

const getQuestion = (a, b, operation) => {
  const operator = getOperator(operation);

  return `${a} ${operator} ${b}`;
};

const getAnswer = (a, b, operation) => execute(operation, a, b);

const processGame = (roundsCount) => {
  const processRounds = getProcessRounds(getExecWithData, getQuestion, getAnswer);

  getProcessGame(gameTask, processRounds)(roundsCount);
};

export default processGame;
