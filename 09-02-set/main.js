// let names = new Set();
// names.add('Summer');
// names.add('Lucy');
// names.add('Henry');
// names.add('Summer');
// console.log(names);
// console.log(names.size);

// let names = new Set(['Summer', 'Lucy', 'Henry', 'Summer']);
// console.log(names);
// console.log(names.size);

let names = new Set(['Summer', 'Lucy', 'Henry', 'Summer']);
// for (let v of names.values()) {
//   console.log(v);
// }
// for (let v of names.keys()) {
//   console.log(v);
// }

// for (let v of names.entries()) {
//   console.log(v);
// }

// names.forEach((v1, v2, set) => {
//   console.log(v1, v2);
// });

console.log(names.has('Summer'));
console.log(names, names.size);
// console.log(names.delete('Henry'));
console.log(names.clear('Henry'));
console.log(names, names.size);
