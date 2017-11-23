import { greetUser, reportWinning, reportLosing } from '../common';

const getProcessGame = (gameTask, processRounds) => {
  const processGame = (roundsCount) => {
    console.log(gameTask);

    const name = greetUser();
    const success = processRounds(roundsCount);

    if (success) {
      reportWinning(name);
    } else {
      reportLosing(name);
    }
  };

  return processGame;
};

export default getProcessGame;
