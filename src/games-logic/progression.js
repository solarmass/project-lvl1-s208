import { cons } from 'hexlet-pairs';
import { getRandomInt, getProgressionMember } from '../common';
import processGame from '..';

const gameTask = 'What number is missing in this progression?';

const progLength = 10;

const getRoundData = () => {
  const first = getRandomInt(1, 50);
  const delta = getRandomInt(2, 5);
  const mPos = getRandomInt(2, progLength);

  const func = (n, progression, missing) => {
    if (n > progLength) {
      return cons(progression, missing);
    }

    const member = getProgressionMember(first, n, delta);
    const isMissingPos = n === mPos;
    const newMissing = isMissingPos ? member : missing;
    const newProgression = isMissingPos ? `${progression} ..` : `${progression} ${member}`;

    return func(n + 1, newProgression, newMissing);
  };

  return func(2, `${first}`, null);
};

const process = () => {
  processGame(gameTask, getRoundData);
};

export default process;
