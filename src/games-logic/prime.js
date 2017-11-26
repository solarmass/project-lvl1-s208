import { cons } from 'hexlet-pairs';
import { getRandomInt, isPrime } from '../common';
import processGame from '..';

const gameTask = 'Is this number prime?';

const getRoundData = () => {
  const number = getRandomInt(0, 100);
  const question = `${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';

  return cons(question, answer);
};

const process = () => {
  processGame(gameTask, getRoundData);
};

export default process;
