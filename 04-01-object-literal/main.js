// let obj = {
//   pCode: { a: '1' },
//   pName: 'Apple',
//   getData() {
//     console.log(obj.pCode, obj.pName);
//   },
// };

// console.log(obj);

//动态属性
// let tValue = 'pCode';
// let obj = {
//   [tValue]: 1001,
//   pName: 'Apple',
//   getData() {
//     console.log(obj.pCode, obj.pName);
//   },
// };

// obj.getData();

// const proto = Object.defineProperty({}, 'pCode', {
//   writable: false,
//   configurable: true,
//   value: 1001,
// });

// const obj = Object.create(proto);
// obj.pCode = 1002;
// console.log(obj.pCode);

// let pCode = 1001;
// let pName = 'Apple';

// let obj = {
//   pCode,
//   pName,
// };
// console.log(obj);

// let obj1 = { a: 'First' };
// let obj2 = Object.assign({}, obj1);
// obj2.a = 'Second';
// console.log(obj1.a);
