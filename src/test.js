const test = (title, testCode) => {
  try {
    testCode();
  } catch (err) {
    console.error(`${title} ${err}`);
  }
};

const expect = (resultValue) => {
  return {
    toBe: (expectedValue) => {
      if (resultValue !== expectedValue) {
        throw new Error('결과 값과 기대 값이 다릅니다.');
      }
    },
  };
};

test('1+2+3', () => {
  expect(6).toBe(3);
});
