// async function test() {
//   // return 0;
//   throw new Error('Found Error');
// }

// const fn = test();
// fn.then((res) => {
//   console.log(res);
// });
// console.log(fn);

// const test = async () => {
//   return 0;
//   // throw new Error('Found Error');
// };

// const fn = test();
// fn.then((res) => {
//   console.log(res);
// });
// console.log(fn);

const cSqr = (a) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a * a);
    }, 2000);
  });
};
cSqr(2).then((res) => {
  console.log(res);
});

(async function showResult() {
  try {
    let res = await cSqr(2);
    console.log(res);
    let res1 = await cSqr(res);
    console.log(res1);
    let res2 = await cSqr(res1);
    console.log(res2);
  } catch (error) {
    //处理错误
  }
})();
