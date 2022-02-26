// let product = new WeakMap();
// product.set('pCode', 1001);
// console.log(product);

// let product = new WeakMap();
// let obj = {};
// product.set(obj, 1001);
// console.log(product.get(obj));

let product = new WeakSet();
let obj1 = {};
let obj2 = {};

product.add(obj1);
product.add(obj2);

console.log(product.has(obj1));
console.log(product.has(obj2));

product.delete(obj1);
console.log(product.has(obj1));
