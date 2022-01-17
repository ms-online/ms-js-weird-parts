// let arr = [1, 2, 4, 5, 6];
// const result = arr.map(element => element * element);
// console.log(result);

// let arr = ['apple', 'orange', 'peach'];
// let lengthArr = arr.map((element) => element.length);
// console.log(lengthArr);

// let arr = [25, 16, 144, 36];
// let result = arr.map((element) => Math.sqrt(element));
// console.log(result);

let products = [
  { pCode: 1, pName: 'apple' },
  { pCode: 2, pName: 'banana' },
  { pCode: 3, pName: 'orange' },
  { pCode: 4, pName: 'peach' },
];

let pNames = products.map((product) => product.pName);
console.log(pNames);
