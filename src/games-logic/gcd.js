import { cons } from 'hexlet-pairs';
import { getRandomInt, isDivisor } from '../common';
import processGame from '../game-processor';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  const divisor = a > b ? b : a;

  const func = (numberToCheck) => {
    if (isDivisor(a, b, numberToCheck) || numberToCheck <= 1) {
      return numberToCheck;
    }
    return func(numberToCheck - 1);
  };

  return func(divisor);
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
