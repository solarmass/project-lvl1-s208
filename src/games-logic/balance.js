import { cons } from 'hexlet-pairs';
import { getRandomInt, balanceNumber } from '../common';
import processGame from '../game-processor';

const gameTask = 'Balance the given number.';

const getRoundData = () => {
  const number = getRandomInt(10, 10000);
  const answer = balanceNumber(number);

  return cons(`${number}`, answer);
};

const process = () => {
  processGame(gameTask, getRoundData);
};

export default process;
