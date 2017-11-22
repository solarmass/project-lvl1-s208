import { getRandomInt, greetUser, askUser, reportWinning, reportLosing } from '../common';

const processGame = (roundsCount, rangeFrom, rangeTo) => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const getNumber = () => getRandomInt(rangeFrom, rangeTo);
  const name = greetUser();

  const processRounds = (roundsLast) => {
    const number = getNumber();

    console.log(`Question: ${number} `);

    const answer = askUser('Your answer: ').toLowerCase();
    const correctAnswer = +number % 2 ? 'no' : 'yes';

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

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
