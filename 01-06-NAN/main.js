// let a = 5;
// let b = 'value';
// console.log(a * b);

// if (isNaN(a * b) === false) {
//   // 有效值...
// }

// if (!isNaN(a * b)) {
//   // 有效值...
//   console.log('Valid');
// } else {
//   console.log('Invalid');
// }

// console.log(a * b == NaN);
// console.log(NaN == NaN);

let a = 5;
let b = 'value';

console.log(isFinite(a * b));
console.log(isFinite(5 * 2));
console.log(isFinite(Number.MAX_VALUE * 2));
console.log(isFinite(Infinity));
