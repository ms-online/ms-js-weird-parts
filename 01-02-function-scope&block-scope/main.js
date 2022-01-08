//变量作用域
// let x = 5;
// function a() {
//   x = x + 1;
// }

// function b() {
//   console.log(x);
// }

// a();
// b();

// 函数作用域：属于这个函数的全部变量都可以在整个函数范围内使用及复用（嵌套的作用域中也可以使用）
///变量提升

// a(); //定义前调用
// function a() {
//   console.log('hello world');
// }
// a(); // 定义后调用

// var x;
// console.log(x);
// x = 1;

// 块级作用域
// let x = 5;
// {
//   let x = 6;
//   console.log(x);
// }

// console.log(x);

// console.log(x);
// let x;
