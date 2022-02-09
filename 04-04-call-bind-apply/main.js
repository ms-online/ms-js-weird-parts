// function test(obj) {
//   this=obj;
//   console.log(this);
// }

// let obj = {
//   a: 1,
// };
// test(obj);

//call
// function test(a, b) {
//   console.log(this);
//   console.log(a, b);
// }

// let obj = {
//   a: 1,
// };
// test.call(obj,2, 3);

//apply
// function test(a, b, c) {
//   console.log(this);
//   console.log(a, b, c);
// }

// let obj = {
//   a: 1,
// };
// test.apply(obj, [2, 3, 4]);

//bind
// function test(a, b) {
//   console.log(this);
//   console.log(a, b);
// }

// let obj = {
//   a: 1,
// };
// const fn = test.bind(obj, 2, 3);
// fn();
