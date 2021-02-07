# 지연평가 + Promise
## L.map
```javascript
L.map = curry(function* (f, iter) {
  for (const value of iter) {
    yield f(value);
  }
});

go(
  [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)],
  L.map((v) => v + 10),
  take(2),
  log,
); // ["[object Promise]10", "[object Promise]10"]
```
기존의 L.map에 Promise가 들어가게 되면 원하지 않는 값이 출력된다.<br>
Promise를 받을 수 있도록 변경해보자.
```javascript
const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));
L.map = curry(function* (f, iter) {
  for (const value of iter) {
    yield go1(value, f);
  }
});

go(
  [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)],
  L.map((v) => v + 10),
  take(2),
  log,
); // [Promise, Promise]
```
이제는 Promise를 받을 준비가 되었다.

하지만 take가 Promise에서 값을 받아오지 않고 Promise 그대로 출력하기 때문에 `[Promise, Promise]`가 출력되는데,<br>
이를 수정해보자.

```javascript
const take = curry((limit, iter) => {
  const res = [];
  iter = iter[Symbol.iterator]();
  let cur;
  // 추가된 부분
  return (function recur() {
    while (!(cur = iter.next()).done) {
      const value = cur.value;
      // 추가된 부분
      if (value instanceof Promise)
        return value.then((v) =>
          (res.push(v), res).length === limit ? res : recur(),
        );

      res.push(value);
      if (res.length === limit) return res;
    }

    return res;
  })();
});
});

go(
  [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)],
  L.map((v) => v + 10),
  take(2),
  log,
); // [11, 12]
```
iterator의 값이 Promise일 때 `then`을 통해 Promise의 값을 push하고, 다시 recur() 함수를 호출해<br>
재귀적으로 동작하도록 하면서 Promise도 받을 수 있게 되었다.

## L.filter
```javascript
L.filter = curry(function* (f, iter) {
  for (const v of iter) {
    if (f(v)) yield v;
  }
});

go(
  [1, 2, 3, 4, 5, 6],
  L.map((v) => Promise.resolve(v * v)),
  L.filter((v) => v % 2),
  take(2),
  log,
); // []
```
현재 L.filter 함수는 Promise로 전달된 값을 받을 수 없는 상태이다.
```javascript
L.filter = curry(function* (f, iter) {
  for (const v of iter) {
    const value = go1(v, f);
    if (value instanceof Promise)
      yield value.then((a) => (a ? v : Promise.reject()));
    else if (value) yield v;
  }
});

go(
  [1, 2, 3, 4, 5, 6],
  L.map((v) => Promise.resolve(v * v)),
  L.filter((v) => v % 2),
  take(2),
  log,
); // Uncaught (in promise) Symbol(nop)
```
L.filter 함수에서 이제 iterable이 Promise가 아닐 땐 바로 yield를 하고, Promise일 땐 Promise를 넘겨주어 take 함수에서<br>
then을 통해 값을 사용할 수 있도록 구현했다. 또한, Promise이지만 조건을 만족하지 못하는 값을 이후에도 전달하지 않기 위해서<br>
Promise.reject(nop)를 사용했다.
> Symbol을 사용한 이유 <br> 처리할 필요가 없는 값임을 알리기 위해서 사용했고, Symbol의 특성이 다른 어떠한 프로퍼티와도 충돌하지 않기 때문

이제 take 함수에서 filter가 처리한 reject값을 받기만 하면 마무리될 것 같다.
```javascript
const take = curry((limit, iter) => {
  const res = [];
  iter = iter[Symbol.iterator]();
  let cur;
  return (function recur() {
    while (!(cur = iter.next()).done) {
      const value = cur.value;
      if (value instanceof Promise)
        return value
          .then((v) => ((res.push(v), res).length === limit ? res : recur()))
          .catch((e) => (e === nop ? recur() : Promise.reject(e)));

      res.push(value);
      if (res.length === limit) return res;
    }

    return res;
  })();
});

go(
  [1, 2, 3, 4, 5, 6],
  L.map((v) => Promise.resolve(v * v)),
  L.filter((v) => v % 2),
  take(2),
  log,
); // [1, 9]
```
이렇게 L.filter가 Promise를 받을 수 있도록 처리했다.

Promise는 Kleisli Composition 관점에 따라 reject를 한 값은 뒤의 then을 모두 무시하고 catch로 가기 때문에<br>
L.filter 뒤에 다른 함수들이 있어도 처리하지 않고 넘어가게 된다.

## reduce에서 nop 지원
```javascript
const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  } else {
    iter = iter[Symbol.iterator]();
  }

  return go1(acc, function recur(acc) {
    let cur;
    while (!(cur = iter.next()).done) {
      const value = cur.value;
      acc = f(acc, value);
      if (acc instanceof Promise) return acc.then(recur);
    }
    return acc;
  });
});
```
현재 reduce 함수는 Promise.reject()로 넘어오는 값을 처리하지 못하기 때문에 이를 수정해보자.
```javascript
// 추가된 부분
const reduceInner = (acc, value, f) =>
  value instanceof Promise
    ? value.then(
        (v) => f(acc, v),
        (e) => (e === nop ? acc : Promise.reject(e)),
      )
    : f(acc, value);

const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  } else {
    iter = iter[Symbol.iterator]();
  }

  return go1(acc, function recur(acc) {
    let cur;
    while (!(cur = iter.next()).done) {
      acc = reduceInner(acc, cur.value, f);
      if (acc instanceof Promise) return acc.then(recur);
    }
    return acc;
  });
});
```
iterator 값이 Promise.reject()일 때를 대비하여 처리를 해주는 reduceInner 함수를 통해 에러를 처리할 수 있게 되었다.
