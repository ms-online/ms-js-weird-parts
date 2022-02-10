// class Child extends String {
//   getLength(str) {
//     console.log(str.length);
//   }
// }

// const obj = new Child('Test string');
// console.log(obj.toUpperCase());
// obj.getLength('hello world');

class Parent {
  constructor(age) {
    this.age = age;
    console.log('调用父级类');
  }
  pMethod() {
    console.log('调用父级方法', this.age);
  }
}

class Child extends Parent {
  constructor() {
    super(12);
  }

  pMethod() {
    // Parent.pMethod();
    console.log('调用子类方法');
    super.pMethod();
  }
}
const obj = new Child(12);
obj.pMethod();
