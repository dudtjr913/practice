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
// test();

/* let i = 0;
setTimeout(() => console.log(i++, 'A'), 0);
requestAnimationFrame(() => console.log(i++, 'B'));
Promise.resolve().then(() => console.log(i++, 'C'));
console.log(i++, ' D');
 */

/* function getUserInfo(user) {
  return new Promise((resolve, reject) => {
    // had it at 1500 to be more true-to-life, but 900 is better for testing
    fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
      resolve(response);
    });
  });
}

function showUserInfo(user) {
  return getUserInfo().then((info) => {
    console.log('user info:', info);
    return true;
  });
}

function showSpinner() {
  console.log('please wait...');
}

function timeout(delay, result) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('wait');
      resolve(result);
    }, delay);
  });
}
Promise.race([showUserInfo(), timeout(100)]).then((displayed) => {
  if (!displayed) showSpinner();
}); */

/* async function waitAndMaybeReject() {
  await new Promise((r) => {
    console.log(r);
    setTimeout(() => r('settimeout'), 1000);
  });

  const isHeads = Boolean(Math.round(Math.random()));
  console.log('??');
  if (isHeads) return 'yay';
  throw Error('Boo!');
}

async function foo() {
  try {
    waitAndMaybeReject();
  } catch (e) {
    return 'caught';
  }
}

foo();
console.log('why?'); */

/*  function* aa() {
  yield new Promise((r) => {
    console.log(r);
    setTimeout(() => console.log('settimeout'), 3000);
  });

  console.log('second');
}

function* bb() {
  yield new Promise((r) => setTimeout(() => r(2), 1000));
  console.log('bb');
} */

/* const async = (generatorFunc) => {
  const generator = generatorFunc();

  const onResolved = (arg) => {
    const result = generator.next(arg);
    console.log(result);
    return result.done
      ? result.value
      : result.value.then((res) => {
          console.log(res);
          return onResolved(res);
        });
  };

  return onResolved;
};

async(function* fetchTodo() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const response = yield fetch(url);
  const todo = yield response.json();
})(); */

// 비동기 함수 (1초 기다린 후 'yay' 반환)
/* async function waitAndMaybeReject() {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  return 'yay';
}

function foo1() {
  waitAndMaybeReject();
  return Promise.resolve('yay');
}

function foo3() {
  const result = waitAndMaybeReject();
  return result;
}

(async () => {
  console.log('foo1', await foo1()); // 즉시 -> console.log
  console.log('foo3', await foo3()); // 1s delay -> console.log
})();

console.log('aa');
 */
// await은 무조건 then으로 한번 기다린 후에 실행하는 듯 - 함수 호출자를 넘겨줌

/* function testa(a) {
  return new Promise((resolve, reject) => {
    console.log('?', a);
    resolve(a);
  });
}

async function doIt() {
  console.log(testa('1'));
  console.log(Promise.resolve('bb'));
  console.log(await testa('2'));
}

doIt();
console.log('aa'); */

/* const async = (generatorFunc) => {
  const generator = generatorFunc();

  const onResolved = (arg) => {
    const result = generator.next(arg);
    console.log(result);
    return result.done
      ? result.value
      : result.value.then((res) => {
          console.log(res);
          return onResolved(res);
        });
  };

  return onResolved;
};

async(function* fetchTodo() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const response = yield fetch(url);
  const todo = yield response.json();
})();
 */
