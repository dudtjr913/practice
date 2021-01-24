function Person(name, age) {
  this.name = name || '이름 모름';
  this.age = age || '나이 모름';
}

function Bridge() {}

function Employee(name, age, job) {
  this.name = name || '이름 모름';
  this.age = age || '나이 모름';
  this.job = job || '직업 모름';
}

Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.getAge = function () {
  return this.age;
};

Bridge.prototype = Person.prototype;

Employee.prototype = new Bridge();
Employee.prototype.constructor = Employee;
Employee.prototype.getJob = function () {
  return this.job;
};

const employee = new Employee('영석', 27, '프론트엔드 개발자');
console.log(employee);
