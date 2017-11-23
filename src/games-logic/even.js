import { getRandomInt } from '../common';
import getProcessGame from '../processors/game-processor';
import getProcessRounds from '../processors/rounds-processor';

const getExecWithData = () => {
  const number = getRandomInt(0, 100);

  return func => func(number);
};

const getQuestion = number => `${number}`;

const isEval = number => !(+number % 2);

const getAnswer = (number) => {
  if (isEval(number)) {
    return 'yes';
  }

  return 'no';
};

const gameTask = 'Answer "yes" if number even otherwise answer "no".\n';

const processGame = (roundsCount) => {
  const processRounds = getProcessRounds(getExecWithData, getQuestion, getAnswer);

  getProcessGame(gameTask, processRounds)(roundsCount);
};

export default processGame;
