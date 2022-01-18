// let products = ['Banana', 'Orange', 'Grapes', 'Apple'];
//比较函数返回值
//-1:第一个参数放在第二个参数前面
//0：意味着不需要变化位置
//1: 第一个参数放在第二个参数后面
//升序
// products.sort(function (a, b) {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }

//   if (a == b) {
//     return 0;
//   }
// });

//降序
// products.sort(function (a, b) {
//   if (a < b) {
//     return 1;
//   }
//   if (a > b) {
//     return -1;
//   }

//   if (a == b) {
//     return 0;
//   }
// });
// console.log(products);

// let price = [45, 23, 10, 89, 5];
// console.log(
//   price.sort(function (a, b) {
//     //升序
//     // return a - b;
//     //降序
//     return b - a;
//   })
// );

//字母降序
// let products = ['Banana', 'Orange', 'Grapes', 'Apple'];
// products.sort();
// console.log(products.reverse());

//undefined:不进行排序，放在排序完成的元素后面
// let products = ['Banana', 'Orange', undefined, 'Grapes', 'Apple'];
// console.log(products.sort());

//对象排序
const employees = [
  { eNo: 1001, salary: 3000 },
  { eNo: 1002, salary: 2200 },
  { eNo: 1003, salary: 3400 },
  { eNo: 1004, salary: 6000 },
];

employees.sort(function (a, b) {
  if (a.salary < b.salary) {
    return 1;
  }
  if (a.salary > b.salary) {
    return -1;
  }
  if (a.salary == b.salary) {
    return 0;
  }
});

console.log(employees);
