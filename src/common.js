import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max + 1) - min)) + min;

const getLengthOfNumber = (number) => {
  const func = (n, length) => {
    if (n >= 1) {
      return func(n / 10, length + 1);
    }

    return length;
  };

  return func(number, 0);
};

const getSumOfDigits = (number) => {
  const func = (n, sum) => {
    if (n > 0) {
      const addToSum = n % 10;

      return func(Math.floor(n / 10), sum + addToSum);
    }

    return sum;
  };

  return func(number, 0);
};

const balanceNumber = (number) => {
  const sum = getSumOfDigits(number);
  const count = getLengthOfNumber(number);

  const modulo = sum % count;
  const firstBalancer = Math.floor(sum / count);

  const balance = (fstBalCount, scndBalCount, result) => {
    if (fstBalCount > 0) {
      return balance(fstBalCount - 1, scndBalCount, `${result}${firstBalancer}`);
    }

    if (scndBalCount > 0) {
      return balance(0, scndBalCount - 1, `${result}${firstBalancer + 1}`);
    }

    return result;
  };

  return balance(count - modulo, modulo, '');
};

const isDivisor = (a, b, divisor) => !(a % divisor) && !(b % divisor);

const askUser = question => readlineSync.question(question);

const greetUser = () => {
  const name = askUser('May I have your name? ');

  console.log(`Hello, ${name}!\n`);

  return name;
};

const welcome = 'Welcome to Brain Games!';

const reportWinning = name => console.log(`Congratulations, ${name}!`);

const reportLosing = name => console.log(`Let's try again, ${name}!`);

export { greetUser, askUser, reportWinning, reportLosing, welcome };
export { getRandomInt, isDivisor, getLengthOfNumber, getSumOfDigits, balanceNumber };
