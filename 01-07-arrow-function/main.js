//传统函数
// function test() {
//   //执行代码
// }
// test();

//函数表达式
// const test = function () {
//   //执行代码
// };
// test();

//箭头函数
// const test = () => {
//   //执行代码
// };
// test();

//箭头函数语法简化：一个参数省略圆括号
// const test = a => {
//   //执行代码
//   cosole.log(a);
// };
// test(1);

//箭头函数语法简化：返回值只有一行省略return
// const test = (a, b) => console.log(a + b);
// test(1, 2);

//IIFE
// (function () {
//   console.log('自执行函数');
// })();

//IIAF
// (() => {
//   console.log('自执行箭头函数');
// })();

// this对象
//在传统函数中，this是运行时调用函数的对象
// function test() {
//   console.log(this);
// }
// test();//window对象

//修改为箭头函数后，this指向的是当前的作用域，而非运行时调用函数的对象
// const test = () => {
//   console.log(this);
// };
// test();//window对象

// const obj = {
//   test() {
//     console.log(this);
//   },
// };
// obj.test();//obj对象

//箭头函数没有自己的this, 它的this是继承而来; 默认指向在定义它时所处的对象(宿主对象),而不是执行时的对象, 定义它的时候,可能环境是window;
// const obj = {
//   test: () => {
//     console.log(this);
//   },
// };
// obj.test();//window对象

//arguments对象
// function test() {
//   console.log(arguments);
// }
// test(1, 2, 3);

// const test = () => {
//   console.log(arguments);
// };
// test(1, 2, 3);//arguments未定义

//new 关键词
// function test() {
//   console.log('hello world');
// }
// const obj = new test();

//new 关键词无法在箭头函数中使用，因为不会作为一个类。
// const test = () => {
//   console.log('hello world');
// };
// const obj = new test(); // test is not a constructor
