// let product = new Map();

// //set方法
// product.set('pCode', '00001');
// product.set(1, 'apple');
// product.set(true, 'Available');
// console.log(product);
// //get方法
// console.log(product.get(true));
// console.log(product.get(1));
// console.log(product.get(0));
// //size属性
// console.log(product.size);

// //[]添加值 - 不可取
// product['price'] = 10;
// console.log(product);

// //set优化
// product.set('pCode', '00001').set(1, 'apple').set(true, 'Available');
// console.log(product);

//map是可迭代对象 - for...of 循环遍历
// let product = new Map();
// product.set('pCode', '00001');
// product.set(1, 'apple');
// product.set(true, 'Available');

//keys方法
// for (let k of product.keys()) {
//   console.log(k);
// }

// //values方法
// for (let v of product.values()) {
//   console.log(v);
// }

// //entries方法
// for (let [ek, ev] of product.entries()) {
//   console.log(`${ek} - ${ev}`);
// }

//object - entries
// let obj = {
//   pCode: 0001,
//   pName: 'Apple',
//   price: 10,
// };

//object 转化为map
// let m = new Map(Object.entries(obj));
// console.log(m);

//map转化为object
// let product = new Map();
// product.set('pCode', '00001').set(1, 'apple').set(true, 'Available');
// let obj = Object.fromEntries(product.entries());
// console.log(obj);

//has方法
// let product = new Map();
// product.set('pCode', '00001').set(1, 'apple').set(true, 'Available');
// console.log(product.has('pCode'));

//forEach
// let product = new Map();
// product.set('pCode', '00001').set(1, 'apple').set(true, 'Available');

// product.forEach((v, k, m) => {
//   console.log(`${v} - ${k}`);
// });

//delete方法: 如果存在元素，则删除并返回true,删除不存在元素，返回false。
// let product = new Map();
// product.set('pCode', '00001').set(1, 'apple').set(true, 'Available');
// console.log(product);
// product.delete(true);
// console.log(product);

//clear方法 :移除map对象的所有键值对
// let product = new Map();
// product.set('pCode', '00001').set(1, 'apple').set(true, 'Available');
// console.log(product, product.size);
// product.clear();
// console.log(product, product.size);
