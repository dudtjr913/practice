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
