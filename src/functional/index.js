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

const curry = (f) => (a, ...args) =>
  args.length ? f(a, ...args) : (...rest) => f(a, ...rest);

const L = {};
L.range = function* (length) {
  let number = -1;
  while (++number < length) yield number;
};

L.map = curry(function* (f, iter) {
  for (const value of iter) {
    yield f(value);
  }
});

L.filter = curry(function* (f, iter) {
  for (const value of iter) {
    if (f(value)) yield value;
  }
});

L.entries = function* (obj) {
  for (const key in obj) {
    yield [key, obj[key]];
  }
};

const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const value of iter) {
    acc = f(acc, value);
  }

  return acc;
});

const go = (param, ...fs) => reduce((acc, f) => f(acc), param, fs);
const pipe = (f, ...fs) => (...param) => go(f(...param), ...fs);
const range = (length) => {
  const res = [];
  let number = -1;
  while (++number < length) {
    res.push(number);
  }

  return res;
};

const take = curry((limit, iter) => {
  const res = [];
  for (const value of iter) {
    res.push(value);
    if (res.length === limit) return res;
  }

  return res;
});

const map = curry(pipe(L.map, take(Infinity)));
const generalMap = curry((f, iter) => {
  const res = [];
  for (const value of iter) {
    res.push(f(value));
  }

  return res;
});

const test = (name, count, f) => {
  console.time(name);
  while (count--) f();
  console.timeEnd(name);
};

const filter = curry(pipe(L.filter, take(Infinity)));

const join = curry((sep = '', iter) =>
  reduce((a, b) => `${a}${sep}${b}`, iter),
);

const queryStr = pipe(
  L.entries,
  L.map(([key, value]) => `${key}=${value}`),
  join(' $ '),
);

log(queryStr({limit: 10, offset: 10, type: 'notice'}));

const users = [
  {age: 32},
  {age: 33},
  {age: 34},
  {age: 28},
  {age: 29},
  {age: 15},
  {age: 42},
];

const find = (f, iter) => go(iter, L.filter(f), take(1), ([v]) => v);

const isIterable = (value) => value && value[Symbol.iterator];

L.flatten = function* (iter) {
  for (const value of iter) {
    if (isIterable(value)) yield* value;
    // for (const flatValue of value) yield flatValue
    else {
      yield value;
    }
  }
};

L.deepFlat = function* deep(iter) {
  for (const value of iter) {
    if (isIterable(value)) yield* deep(value);
    // for (const flatValue of deep(value)) yield flatValue
    else {
      yield value;
    }
  }
};

L.flatMap = curry(pipe(L.map, L.flatten));

const flatten = pipe(L.flatten, take(Infinity));
const deepFlat = pipe(L.deepFlat, take(Infinity));
const flatMap = curry(pipe(L.map, flatten));

const arr = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9, 10],
];

go(
  arr,
  L.flatten,
  L.filter((v) => v % 2),
  reduce((a, b) => a + b),
  log,
);

/* go(
    0,
    (a) => a + 1,
    (a) => a + 10,
    (a) => a + 100,
    log,
    );
    pipe(
  (a, b) => a + b,
  (a) => a + 10,
  (a) => a + 100,
  log,
  )(0, 1);
  
  const total_price = pipe(
    map((product) => product.price),
  reduce(addPrice),
);
const getTotalPrice = (f) => pipe(filter(f), total_price);

console.clear();
go(
  products,
  (products) => filter((product) => product.price < 5000, products),
  (products) => map((product) => product.price, products),
  (price) => reduce(addPrice, price),
  log,
);

go(
  products,
  filter((product) => product.price < 5000),
  map((product) => product.price),
  reduce(addPrice),
  log,
);

go(
  products,
  filter((product) => product.price < 5000),
  total_price,
  log,
);

go(
  products,
  getTotalPrice((product) => product.price < 5000),
  log,
);

go(
  products,
  getTotalPrice((product) => product.price >= 5000),
  log,
); */
