const log = console.log;

/* const getAnswerNumber = (numberArray, count) => {
  for (const answerNumber of createAnswerNumber(numberArray, count)) {
    if (answerNumber.length === count) {
      return answerNumber;
    }
  }
};

const isRightArg = (numberArray, count) => {
  if (new Set(numberArray).size !== numberArray.length) {
    return console.error('array에 중복되는 수가 있습니다.');
  }
  if (numberArray.length < count) {
    return console.error('count가 array의 길이보다 작아야 합니다.');
  }

  return true;
};

function* createAnswerNumber(numberArray, count) {
  if (!isRightArg(numberArray, count)) return;

  const answer = [];

  while (answer.length !== count) {
    const randomIndex = Math.floor(Math.random() * numberArray.length);
    const randomNumber = numberArray[randomIndex];

    if (!answer.includes(randomNumber)) {
      answer.push(randomNumber);
      yield randomNumber;
    }
  }

  yield answer;
}

const answer = getAnswerNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
console.log(answer); */

/* function* infinity(startNum = 0) {
  while (true) yield startNum++;
}

function* limit(iterator, finishNum) {
  for (const num of iterator) {
    yield num;
    if (finishNum === num) return;
  }
}

function* odds(startNum, finishNum) {
  for (const num of limit(infinity(startNum))) {
    if (num % 2) yield num;
    if (num === finishNum) return;
  }
}

log(...odds(3, 8));
log([...odds(3, 8), ...odds(9, 20)]);

const [head, ...tail] = odds(3, 12);
log(head);
log(tail);

const [first, second, ...rest] = odds(3, 12);
log(first);
log(second);
log(rest);

const func = (...rest) => {
  return rest;
};

log(func(...odds(3, 8)));
 */

const map = (f, iter) => {
  const res = [];
  for (const value of iter) {
    res.push(f(value));
  }

  return res;
};

const filter = (f, iter) => {
  const res = [];
  for (const v of iter) {
    f(v) && res.push(v);
  }

  return res;
};

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const v of iter) {
    acc = f(acc, v);
  }

  return acc;
};

const products = [
  {name: '사과', price: 5000},
  {name: '배', price: 6000},
  {name: '오렌지', price: 4000},
  {name: '키위', price: 8000},
  {name: '귤', price: 3000},
  {name: '바나나', price: 2000},
];

log(
  reduce(
    (acc, v) => acc + v,
    0,
    filter(
      (price) => price < 5000,
      map((product) => product.price, products),
    ),
  ),
);

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

let c = 30;
const add = (a, b) => {
  c = a;
  return a + b;
};

log(c);
log(add(10, 20));
log(c);
