//简单搜索
// let arr = ['One', 'Two', 'One', 'Three', 'Four', 'One', 'Five'];

// console.log(arr.indexOf('one', 3));
// console.log(arr.lastIndexOf('One', 3));
// console.log(arr.includes('One', 3));

//条件搜索
let salaries = [4500, 3800, 2500, 4200, 5000];
//查找第一个符合条件的数组元素,参数是一个回调函数
//当条件成立为true时，返回该元素。如果没有符合条件的元素，返回值为undefined。
// const result = salaries.find((element) => {
//   return element > 6000;
// });

//当条件为true时findIndex()返回的是索引值,如果没有符合条件元素时findIndex()返回的是-1
// const result = salaries.findIndex((element) => {
//   return element > 6000;
// });

//filter()返回的是数组，数组内是所有满足条件的元素,如果条件不满足，filter()返回的是一个空数组
const result = salaries.filter((element) => {
  return element > 6000;
});
console.log(result);
