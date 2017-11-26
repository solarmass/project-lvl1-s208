import { cons } from 'hexlet-pairs';
import { getRandomInt, isEven } from '../common';
import processGame from '..';

const gameTask = 'Answer "yes" if number even otherwise answer "no".';

const getRoundData = () => {
  const number = getRandomInt(0, 100);
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';

  return cons(question, answer);
};

const process = () => {
  processGame(gameTask, getRoundData);
};

export default process;
