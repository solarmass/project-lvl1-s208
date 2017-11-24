import { cons } from 'hexlet-pairs';
import { getRandomInt } from '../common';
import processGame from '../game-processor';

const gameTask = 'Find the greatest common divisor of given numbers.';

const isDivisor = (a, b, divisor) => !(a % divisor) && !(b % divisor);

const getGcd = (a, b) => {
  const func = (lastDivisor, numberToCheck) => {
    const divisor = isDivisor(a, b, numberToCheck) ? numberToCheck : lastDivisor;

    return numberToCheck < a && numberToCheck < b ? func(divisor, numberToCheck + 1) : divisor;
  };

  return func(1, 2);
};

const getRoundData = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  const question = `${a} ${b}`;
  const answer = getGcd(a, b);

  return cons(question, answer);
};

const process = () => {
  processGame(gameTask, getRoundData);
};

export default process;
