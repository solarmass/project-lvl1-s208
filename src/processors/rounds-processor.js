import { askUser } from '../common';

const getProcessRounds = (getExecWithData, getQuestion, getAnswer) => {
  const processRounds = (roundsLast) => {
    const executeWithRoundData = getExecWithData();
    const question = executeWithRoundData(getQuestion);

    console.log(`Question: ${question}`);

    const userAnswer = askUser('Your answer: ').toLowerCase();
    const correctAnswer = executeWithRoundData(getAnswer);

    if (userAnswer !== `${correctAnswer}`) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

      return false;
    }

    console.log('Correct!');

    return roundsLast <= 1 ? true : processRounds(roundsLast - 1);
  };

  return processRounds;
};

export default getProcessRounds;
