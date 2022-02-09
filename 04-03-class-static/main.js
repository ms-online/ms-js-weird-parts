//ES6创建class类
// const getData = 'showData';
// class Hourse {
//   constructor(nDoors, windows) {
//     this.nDoors = nDoors;
//     this.windows = windows;
//   }
//   showData() {
//     console.log(this.nDoors, this.windows);
//   }
// }

// const obj1 = new Hourse(5, 10);
// const obj2 = new Hourse(6, 12);
// obj1.showData();
// obj2.showData();

// class Hourse {
//   static hourseVersion = 1.1;
//   static test() {
//     console.log('调用静态方法');
//     this.test1();
//   }
//   static test1() {
//     console.log('新方法');
//   }
// }

// Hourse.test();
// console.log(Hourse.hourseVersion);

// function Hourse(windows) {
//   console.log('调用方法');
//   this.windows = windows;
// }

// var obj1 = new Hourse(3);
// var obj2 = new Hourse(5);

const test = function () {};

const Hourse = class {
  constructor() {
    console.log(123);
  }
};
const obj = new Hourse();
