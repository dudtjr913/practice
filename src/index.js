import { dataOne, dataTwo } from "./utils/constant.js";

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
      if (typeof dataOne[key][v] === "number") {
        numbersArray.push(v);
      }
    });
  }
  console.log(numbersArray);
};

extractNumbersArray();

const extractSkArray = (() => {
  const skArray = [];

  return (data) => {
    const nextData = data.filter((v) => v.childnode);
    if (nextData !== []) {
      data.forEach((key) => {
        if (key.type === "sk") {
          skArray.push(key.name);
        }
        extractSkArray(key.childnode);
      });
    }

    return skArray;
  };
})();

extractSkArray(dataTwo);
