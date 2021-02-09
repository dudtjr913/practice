# C.reduce
```javascript
const delay500 = (a) =>
  new Promise((resolve) => {
    console.log('result');
    setTimeout(() => resolve(a), 500);
  });

go(
  [1, 2, 3, 4, 5],
  L.map((a) => delay500(a * a)),
  L.filter((a) => a % 2),
  reduce((a, b) => a + b),
  log,
); 
// result
// result
// result
// result
// result
// 35
```
현재 reduce는 들어온 iterable을 하나씩 yield를 하면서 동작한다.<br>
하지만 효율을 위한 상황일 때, 한 번에 처리하고 싶은 경우가 있을 수 있다.

그렇다면 병렬적으로 처리해주는 C.reduce를 만들어보자.
```javascript
const C = {};
C.reduce = curry((f, acc, iter) =>
  iter ? reduce(f, acc, [...iter]) : reduce(f, [...acc]),
);

go(
  [1, 2, 3, 4, 5],
  L.map((a) => delay500(a * a)),
  L.filter((a) => a % 2),
  reduce((a, b) => a + b),
  log,
); 
// result * 5
// 35
```
이번에는 reduce에서 한 번에 처리를 해서 값을 받아오기 때문에 5번의 과정을 거치지 않고 한 번에 처리된다.
