import { cons } from 'hexlet-pairs';
import { getRandomInt } from '../common';
import processGame from '../game-processor';

const gameTask = 'What number is missing in this progression?';

const progLength = 10;

const getProgression = (startPosition, startNumber) => {
  const delta = getRandomInt(2, 5);

  const func = (curPosition, curNumber) => {
    if (curPosition < 1 || curPosition > progLength) {
      return '';
    }
    if (curPosition < startPosition) {
      return `${func(curPosition - 1, curNumber - delta)}${curNumber} `;
    }
    if (curPosition > startPosition) {
      return ` ${curNumber}${func(curPosition + 1, curNumber + delta)}`;
    }
    return `${func(curPosition - 1, curNumber - delta)}..${func(curPosition + 1, curNumber + delta)}`;
  };

  return func(startPosition, startNumber);
};

const getRoundData = () => {
  const mPos = getRandomInt(1, progLength);
  const answer = getRandomInt(10, 20);
  const question = getProgression(mPos, answer);

  return cons(question, answer);
};

const process = () => {
  processGame(gameTask, getRoundData);
};

export default process;
