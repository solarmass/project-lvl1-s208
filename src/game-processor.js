import { car, cdr } from 'hexlet-pairs';
import { greetUser, askUser, reportWinning, reportLosing, welcome } from './common';

const getQuestion = roundData => car(roundData);

const getAnswer = roundData => cdr(roundData);

const roundsCount = 3;

const processGame = (gameTask, getRoundData) => {
  console.log(welcome);
  console.log(`${gameTask}\n`);

  const name = greetUser();

  const processRounds = (roundsLast) => {
    const roundData = getRoundData();
    const question = getQuestion(roundData);
    const correctAnswer = getAnswer(roundData);

    console.log(`Question: ${question}`);

    const userAnswer = askUser('Your answer: ').toLowerCase();

    if (userAnswer !== `${correctAnswer}`) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

      return false;
    }

    console.log('Correct!');

    return roundsLast <= 1 ? true : processRounds(roundsLast - 1);
  };

  const success = processRounds(roundsCount);

  if (success) {
    reportWinning(name);
  } else {
    reportLosing(name);
  }
};

export default processGame;
