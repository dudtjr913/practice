const getPromiseResult = (url) => {
  const result = fetch(url);
  return result
    .then((a) => {
      if (a.ok) {
        return a.text();
      } else {
        throw new Error(a);
      }
    })
    .then(console.log);
};

const practicePromise = (url) => {
  return new Promise((resolve, reject) => {
    document.querySelector('#loading').classList.remove('hide');
    // 비동기 처리

    if (성공) {
      resolve();
      return;
    }

    if (실패) {
      reject();
      return;
    }
  });
};

/* const func = async () => {
  console.log(await getPromiseResult('http://jsonplaceholder.typicode.com'));

  console.log('aa');
}; */

/* func(); */

const asyncAwait = async () => {
  const a = await 1;
  return a;
};

asyncAwait().then(console.log);

const test = async () => {
  const first = await new Promise((resolve) => setTimeout(() => resolve(1), 3000));
  const second = await new Promise((resolve) => setTimeout(() => resolve(2), 2000));
  const third = await new Promise((resolve) => setTimeout(() => resolve(3), 1000));

  console.log(first, second, third);
};

/* const promiseAll = async () => {
  const res = await Promise.all([
    new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
  ]);

  console.log(res);
  console.log('aa');
};
 */
test();

/* let i = 0;
setTimeout(() => console.log(i++, 'A'), 0);
requestAnimationFrame(() => console.log(i++, 'B'));
Promise.resolve().then(() => console.log(i++, 'C'));
console.log(i++, ' D');
 */
