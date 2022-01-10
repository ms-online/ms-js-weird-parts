// 剩余运算符
//  剩余参数表示参数个数不确定的参数列表。
// function sum(...nums) {
//   console.log(nums);
// }

// sum(1, 2);
// sum(3, 4, 5);
// sum(5, 6, 7, 8, 9);

// arguments参数
//函数的arguments是一个伪数组，不能使用数组方法，在箭头函数中无效
// function sum() {
//   console.log(arguments);
// }
// const sum = () => {
//   console.log(arguments);
// };

// sum(1, 2);
// sum(3, 4, 5);
// sum(5, 6, 7, 8, 9);

//展开运算符
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [...arr1, 6, 7, 8, 9];

// console.log(arr2);

let arr = [43, 56, 3232, 56, 1, 50];
console.log(Math.max(...arr));
