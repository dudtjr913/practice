/* 
function Bridge() {}

function Employee(name, age, job) {
  this.name = name || '이름 모름';
  this.age = age || '나이 모름';
  this.job = job || '직업 모름';
}

Bridge.prototype = Person.prototype;

console.log(Bridge.prototype);
Employee.prototype = new Bridge();
Employee.prototype.getJob = function () {
  return this.job;
};

const employee = new Employee('영석', 27, '프론트엔드 개발자');
console.log(Employee.prototype); */

function Person(name, age) {
  this.name = name || '이름 모름';
  this.age = age || '나이 모름';
}

Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.getAge = function () {
  return this.age;
};

const extendsClass = (() => {
  function Bridge() {}
  return (SuperClass, SubClass) => {
    Bridge.prototype = SuperClass.prototype;
    SubClass.prototype = new Bridge();
    SubClass.prototype.constructor = SubClass;

    return SubClass;
  };
})();

const Employee = extendsClass(Person, function (name, age, job) {
  this.name = name || '이름 모름';
  this.age = age || '나이 모름';
  this.job = job || '직업 모름';
});

const yeong = new Employee('영석', 27, '프론트엔드 개발자');
console.log(yeong);
