let num = 1;
const func1 = () => num;
const func2 = ((num) => () => num)(num);
console.log(`${num} ${func1.name || 'Anonymous'}: ${func1()}`); // 1 func1: 1
console.log(`${num} ${func2.name || 'Anonymous'}: ${func2()}`); // 1 Anonymous: 1
num = 2;
console.log(`${num} ${func1.name || 'Anonymous'}: ${func1()}`); // 2 func2 : 2
console.log(`${num} ${func2.name || 'Anonymous'}: ${func2()}`); // 2 Anonymous: 1
