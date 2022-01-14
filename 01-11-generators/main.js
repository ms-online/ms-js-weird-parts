//生成器函数语法
// function* fn(){};
// function *fn(){};
// function * fn(){};
// function*fn(){};

//yield：暂停函数
// const genFunction = function* () {
//   console.log('1');
//   yield 'YieldValue'; //暂停了函数
//   console.log('2');
//   yield;
//   console.log('3');
// };

//next方法：启动函数或将函数指针从上次挂起的位置移动到下一行
// const gObj = genFunction();
// gObj.next();
// console.log(gObj.next());
// console.log(gObj.next());
// console.log(gObj.next());

// for (let o of gObj) {
//   console.log(o);
// }

//展开运算符
// const gObj = [...genFunction()];
// console.log(gObj);

//生成器最适合与迭代器一起使用
// let obj = {
//   start: 1,
//   end: 5,
//   *[Symbol.iterator]() {
//     for (let counter = this.start; counter <= this.end; counter++) {
//       yield counter;
//     }
//   },
// };

// for (let i of obj) {
//   console.log(i);
// }

//当在递归函数或者被另一个生成器函数调用的时候，使用yield*语法
// function* gen1() {
//   console.log('hello');
// }
// function* gen2() {
//   yield* gen1();
// }

// const g2 = gen2();
// g2.next();

//阶乘
// function* fact() {
//   //if
//   //exit
//   yield* fact();
// }

//return方法允许终止生成器函数
// function* gen() {
//   yield '1';
//   yield '2';
// }

// const gObj = gen();
// console.log(gObj.return('满足条件'));
// console.log(gObj.next());
// console.log(gObj.next());

//finally可以禁止return终止生成器的执行
// function* gen() {
//   try {
//     yield '1';
//     yield '2';
//   } finally {
//     yield 'Finally';
//   }
// }

// const gObj = gen();
// console.log(gObj.next());
// console.log(gObj.return());

//throw():在生成器函数中最后暂停的yield的位置抛出异常

// function* gen() {
//   try {
//     yield '1';
//     yield '2';
//   } catch (error) {
//     console.log('Error:' + error);
//   }
// }
// const gObj = gen();
// console.log(gObj.next());
// console.log(gObj.throw());
