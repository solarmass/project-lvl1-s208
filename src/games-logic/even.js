import { getRandomInt, greetUser, askUser, reportWinning, reportLosing } from '../common';

const checkAnswer = (number, answer) => {
  const isEval = !(+number % 2);
  const answerInLower = answer.toLowerCase();

  return (isEval && answerInLower === 'yes') || (!isEval && answerInLower === 'no');
};

const processGame = (roundsCount, rangeFrom, rangeTo) => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const getNumber = () => getRandomInt(rangeFrom, rangeTo);
  const name = greetUser();

  const processRounds = (roundsLast) => {
    const number = getNumber();

    console.log(`Question: ${number} `);

    const answer = askUser('Your answer: ');
    const result = checkAnswer(number, answer);

    if (!result) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");

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
