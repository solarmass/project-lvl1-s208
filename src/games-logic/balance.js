import { cons, car, cdr } from 'hexlet-pairs';
import { getRandomInt } from '../common';
import processGame from '../game-processor';

const gameTask = 'Balance the given number.';

const getRoundData = () => {
  const count = getRandomInt(2, 4);

  const getQuestionData = (index, sum, fullNumber) => {
    if (index < count) {
      const number = getRandomInt(0, 9);

      return getQuestionData(index + 1, sum + number, `${fullNumber}${number}`);
    }

    return cons(sum, fullNumber);
  };

  const questionData = getQuestionData(0, 0, '');

  const sum = car(questionData);
  const modulo = sum % count;
  const firstBalancer = Math.floor(sum / count);

  const getAnswer = (fstBalCount, scndBalCount, result) => {
    if (fstBalCount > 0) {
      return getAnswer(fstBalCount - 1, scndBalCount, `${result}${firstBalancer}`);
    }

    if (scndBalCount > 0) {
      return getAnswer(0, scndBalCount - 1, `${result}${firstBalancer + 1}`);
    }

    return result;
  };

  const question = cdr(questionData);
  const answer = getAnswer(count - modulo, modulo, '');

  return cons(question, answer);
};

const process = () => {
  processGame(gameTask, getRoundData);
};

export default process;
