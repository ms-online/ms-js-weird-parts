// function outer() {
//   function inner() {
//     console.log('Inner called');
//   }
//   inner();
// }
// outer();

// function outer() {
//   function inner() {
//     console.log('Inner called');
//   }
//   return inner;
// }
// const callInner = outer();
// callInner();
// const callInner = function inner(){}

// const outer = () => {
//   return () => {
//     console.log('Inner called');
//   };
// };
// const callInner = outer();
// callInner();

//作用：闭包可以记住外部变量，另一个是让这些变量的值始终保持在内存中。
const addCounter = () => {
  let counter = 0;
  return () => {
    counter++; //3
    return counter; //3
  };
};
const callIner = addCounter();
console.log(callIner());
console.log(callIner());
console.log(callIner());
