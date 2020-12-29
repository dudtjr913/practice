import {dataOne, dataTwo} from './utils/constant.js';

console.log(Object.keys(dataOne)); // ["debug", "window", "image", "text"]
console.log(Object.values(dataOne.window)); // ["Sample Konfabulator Widget", "main_window", 500, 500]
console.log(Object.entries(dataOne.window));
/*
0: (2) ["title", "Sample Konfabulator Widget"]
1: (2) ["name", "main_window"]
2: (2) ["width", 500]
3: (2) ["height", 500]
*/

// 숫자로만 구성된 요소 뽑아 배열로 만들기
const extractNumbersArray = () => {
  const numbersArray = [];
  for (const key in dataOne) {
    const keyArray = Object.keys(dataOne[key]);
    keyArray.forEach((v) => {
      if (typeof dataOne[key][v] === 'number') {
        numbersArray.push(v);
      }
    });
  }
  console.log(numbersArray);
};

extractNumbersArray();

const extractWantedKeys = (() => {
  const skArray = [];

  return (data, findValud) => {
    const nextData = data.filter((v) => v.childnode);
    if (nextData.length > 0) {
      nextData.forEach((key) => {
        if (key.type === findValud) {
          skArray.push(key.name);
        }
        extractWantedKeys(key.childnode, 'sk');
      });
    }

    return skArray;
  };
})();

console.log(extractWantedKeys(dataTwo, 'sk'));

Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue ? initialValue : this[0];
  if (initialValue) {
    this.forEach((cur) => (acc = callback(acc, cur)));
  } else {
    for (let i = 1; i < this.length; i++) {
      acc = callback(acc, this[i]);
    }
  }

  return acc;
};

console.log([1, 2, 3, 4, 5].myReduce((a, b) => a + b));
