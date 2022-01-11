//柯里化(currying)，又称为部分求值，一个柯里化函数首先会接受一些参数，但是不会立即参与求值，而是将其保存在闭包中，并返回一个函数，在需要求值时，会将存在闭包中的变量拿出来求值。
// sum(5,6)
// sum(5)(6); //11

// const sum = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };

// const callInner = sum(5); //返回了一个闭包函数，传递的5存储在了js的词法环境里面
// const answer = callInner(6); //求值时，将5和6进行相加，返回结果
// console.log(answer);

// const answer = sum(5)(6);
// console.log(answer);

//es6 箭头函数
// const sum = a =>b=> a + b;

//计算折扣价格
const PriceCalc = (price) => {
  return (dPer) => {
    return price * dPer;
  };
};

//产品价格保持不变的，变化的折扣比例
const discountAmount = PriceCalc(300); //调用部分函数
console.log(discountAmount(0.8));
console.log(discountAmount(0.5));

//柯里化的过程是逐步传参，逐步缩小函数的适用范围，逐步求解的过程。
//柯里化的作用
// 延迟计算
// 参数复用
// 动态创建函数
