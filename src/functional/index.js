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

const products = [
  {name: '사과', price: 5000},
  {name: '배', price: 6000},
  {name: '오렌지', price: 4000},
  {name: '키위', price: 8000},
  {name: '귤', price: 3000},
  {name: '바나나', price: 2000},
];

const $elem = document.querySelectorAll('*');

const mapObject = new Map();
mapObject.set('a', 10);
mapObject.set('b', 20);

function* gen() {
  yield 1;
  yield 2;
  yield 3;
  return 100;
}

const nameArray = [];
for (const value of products) {
  nameArray.push(value.name);
}

const map = (f, iter) => {
  const res = [];
  for (const value of iter) {
    res.push(f(value));
  }

  return res;
};

log(map((v) => v.price, products));
log(map((v) => v.nodeName, $elem));
log(map((v) => v * v, gen()));
log(new Map(map(([key, value]) => [key, value * 2], mapObject)));

const filter = (f, iter) => {
  const res = [];
  for (const v of iter) {
    f(v) && res.push(v);
  }

  return res;
};

log(...filter((v) => v.price < 5000, products));
log(filter((v) => v % 2, [1, 2, 3, 4]));
log(
  filter(
    (v) => v % 2,
    (function* () {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
    })(),
  ),
);
