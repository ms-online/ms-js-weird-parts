// undefined:当你没有为js变量分配任何值的时候，为undefined。
// let x ||let x = 1;
// console.log(x);
// console.log(typeof x);

// null
// let x = null;
// console.log(x);
// console.log(Number(x));

// let y;
// console.log(Number(y));

// 使用松散比较==，为true，因为它们都表示的是一个无效的值
// 并且在比较相等性之前，null 没有被转换为其他类型
// console.log(x == y);

// 严格比较===，为false，两者不属于同一种类型：
// console.log(x === y);

// 不推荐直接为变量赋值为undefined
let x = undefined;
console.log(x);
