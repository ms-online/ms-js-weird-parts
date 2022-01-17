// let arr = [2, 4, 6, 8, 10];
//求累加和
// let result = arr.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 10);
// console.log(result);

//求乘积
// let result = arr.reduce((accumulator, currentValue) => {
//   return accumulator * currentValue;
// }, 10);
// console.log(result);

//求平均值
// let result = arr.reduce((accumulator, currentValue, index, arr) => {
//   accumulator += currentValue;
//   if (index === arr.length - 1) {
//     return accumulator / arr.length;
//   }
//   return accumulator;
// });
// console.log(result);

// reduceRight():从右往左进行遍历

//数组扁平化
// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

////concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。

// let fArr = arr.reduce((accumulator, currentValue) => {
//   return accumulator.concat(currentValue);
// }, []);

// console.log(fArr);

//获取数组中的对象的键值之和
let employees = [
  { eCode: 1, salary: 4000 },
  { eCode: 2, salary: 5000 },
  { eCode: 3, salary: 3800 },
  { eCode: 4, salary: 4500 },
];

let totalSalaries = employees.reduce((accumulator, current) => {
  return accumulator + current.salary;
}, 0);

console.log(totalSalaries);

//5中实现数组扁平化方法
// https://www.cnblogs.com/wind-lanyan/p/9044130.html
