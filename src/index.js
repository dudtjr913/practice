import { data } from "./utils/constant.js";

console.log(Object.keys(data)); // ["debug", "window", "image", "text"]
console.log(Object.values(data.window)); // ["Sample Konfabulator Widget", "main_window", 500, 500]
console.log(Object.entries(data.window));
/*
0: (2) ["title", "Sample Konfabulator Widget"]
1: (2) ["name", "main_window"]
2: (2) ["width", 500]
3: (2) ["height", 500]
*/

// 숫자로만 구성된 요소 뽑아 배열로 만들기
const extractNumbersArray = () => {
  const numbersArray = [];
  for (const key in data) {
    const keyArray = Object.keys(data[key]);
    keyArray.forEach((v) => {
      if (typeof data[key][v] === "number") {
        numbersArray.push(v);
      }
    });
  }
  console.log(numbersArray);
};

extractNumbersArray();
