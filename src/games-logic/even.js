import { cons } from 'hexlet-pairs';
import { getRandomInt } from '../common';
import processGame from '../game-processor';

const isEven = number => !(+number % 2);

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
