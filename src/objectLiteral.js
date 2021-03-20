const NUMBERS = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
};

const getNumbers = (value) => {
  const actions = {
    [NUMBERS.FIRST]: () => {
      console.log('1');
    },
    [NUMBERS.SECOND]: () => {
      console.log('2');
    },
    [NUMBERS.THIRD]: () => {
      console.log('3');
    },
  };

  actions[value]?.();
};

getNumbers(1);
getNumbers(4);
