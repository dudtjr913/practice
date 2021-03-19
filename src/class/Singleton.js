class Singleton {
  static instance;
  constructor(name) {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    this.name = name;
    Singleton.instance = this;
  }

  sayHello() {
    return `Hi!!! I'm ${this.name}`;
  }
}

const a = new Singleton('ditto');
const b = new Singleton();

console.log(a === b);
