let num = 1;
const func1 = () => num;
const func2 = ((num) => () => num)(num);
console.log(`${num} ${func1.name || 'Anonymous'}: ${func1()}`); // 1 func1: 1
console.log(`${num} ${func2.name || 'Anonymous'}: ${func2()}`); // 1 Anonymous: 1
num = 2;
console.log(`${num} ${func1.name || 'Anonymous'}: ${func1()}`); // 2 func2 : 2
console.log(`${num} ${func2.name || 'Anonymous'}: ${func2()}`); // 2 Anonymous: 1

const curry = (binaryFn) => (firstArg) => (secondArg) => binaryFn(firstArg, secondArg);

const convertCurry = (binaryFn) => {
  return function (firstArg) {
    return function (secondArg) {
      return binaryFn(firstArg, secondArg);
    };
  };
};

const genericTable = (x, y) => x * y;

const tableOf2 = curry(genericTable)(2);
const tableOf22 = convertCurry(genericTable)(2);

tableOf2(4);
tableOf22(4);

const multiply1 = function (num) {
  return num * 2;
};

function multiply2(num) {
  return num * 2;
}

function calculate(f, arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = f(arr[i]);
  }
  return result;
}

console.log(calculate(multiply1, [1, 2, 3])); // [2,4,6]
console.log(calculate(multiply2, [1, 2, 3])); // [2,4,6]
