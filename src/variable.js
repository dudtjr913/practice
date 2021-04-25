/* var a = 3;
var a = 5;
console.log(a); // 5

var b = () => {
  var i = 3;
  console.log(i); // 3
};

b();
// console.log(i); // Uncaught ReferenceError: i is not defined

for (var c = 1; c < 5; c++) {
  var d = 100;
}
console.log(c);
console.log(d);

if (1) {
  var e = 'e';
}
console.log(e);

console.log(f); // undefined
var f = 10;

g = '이것도 돼?';
console.log(g);
 */

const ditto = {
  name: 'ditto',
};

const getUserWithConvertedName = (user, name) => {
  return { ...user, name };
};

const cheffe = getUserWithConvertedName(ditto, 'cheffe');
console.log(ditto);
console.log(cheffe);
