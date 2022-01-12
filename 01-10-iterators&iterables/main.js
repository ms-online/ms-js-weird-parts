//Array、Map和Set及strings都是可迭代对象。
// 具有iterable类型的集合可以通过for...of循环来遍历。
// let arr = [1, 2, 3, 4];
// for (let i of arr) {
//   console.log(i);
// }

//可迭代对象都有默认的迭代器和Symbol.iterator属性
// let arr = [1, 2, 3, 4];
// let itr = arr[Symbol.iterator]();
//迭代器对象自动包含有一个next()方法
//next()方法返回包含两个属性的对象，value表示当前位置的值，done表示是否迭代完
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

//如何将对象字面量创建为可迭代对象：
//第一：具有键值为Symbol.iterator的方法，返回一个可迭代对象
//第二：对象字面量要拥有next（）方法
let obj = {
  start: 1,
  end: 5,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    if (obj.start <= obj.end) {
      return { value: obj.start++, done: false };
    } else {
      return { done: true };
    }
  },
};

for (let i of obj) {
  console.log(i);
}
