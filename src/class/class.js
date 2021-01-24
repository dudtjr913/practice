/* function Person(name, age) {
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
  return (SuperClass, SubClass, subMethod) => {
    Bridge.prototype = SuperClass.prototype;
    SubClass.prototype = new Bridge();
    SubClass.prototype.constructor = SubClass;

    if (subMethod) {
      subMethod.forEach((method) => {
        for (const key in method) {
          SubClass.prototype[key] = method[key];
        }
      });
    }
    Object.freeze(SubClass.prototype);

    return SubClass;
  };
})();

const Employee = extendsClass(
  Person,
  function (name, age, job) {
    this.name = name || '이름 모름';
    this.age = age || '나이 모름';
    this.job = job || '직업 모름';
  },
  [
    {
      getJob: function () {
        return this.job;
      },
    },
    {
      getInfo: function () {
        return {name: this.name, age: this.age, job: this.job};
      },
    },
  ],
);

const yeong = new Employee('영석', 27, '프론트엔드 개발자');

console.log(yeong.getInfo());
 */

function Book(kind, name) {
  this.kind = kind;
  this.name = name;
}

Book.prototype.getKind = function () {
  return this.kind;
};

Book.prototype.getName = function () {
  return this.name;
};

function JavaScript(kind, name, publisher) {
  this.kind = kind;
  this.name = name;
  this.publisher = publisher;
}

function Bridge() {}
Bridge.prototype = Book.prototype;
JavaScript.prototype = new Bridge();
JavaScript.prototype.constructor = JavaScript;
JavaScript.prototype.getPublisher = function () {
  return this.publisher;
};

const core = new JavaScript('자바스크립트', '코어 자바스크립트', '위키북스');
console.log(core);
