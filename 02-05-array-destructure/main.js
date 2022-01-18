//数组解构
// let arr = [80, 90, 93, 26];
// let [a, b, c, d] = arr;
// console.log(a, b, c, d);

//函数解构
// function test() {
//   return [80, 90, 93, 26];
// }
// let [a, b, c, d] = test();
// console.log(a, b, c, d);

//不完全解构
// let arr = [80, 90, 93, 26];
// let [a, , c, d] = arr;
// console.log(a, c, d);

//值交换
//传统方法
// var a, b, tmp;
// tmp = a;
// a = b;
// b = tmp;
//解构方法
// let a = 4;
// let b = 5;
// [a, b] = [b, a];
// console.log(a, b);

//结合展开运算符
// let arr = [4, 5, 6];
// let [a, ...b] = arr;
// console.log(a, b);

//默认值
let [a, b = 0, c] = [5, 6, 7];
console.log(a, b, c);
