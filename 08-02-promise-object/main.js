// let pr = new Promise((resolve, reject) => {
//   //resolve('Success');
//   // reject('Error');

//   setTimeout(() => {
//     // resolve('Success');
//     reject('Error');
//   }, 2000);
// });

// pr.then((msg) => {
//   console.log(msg);
// })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('任务已处理');
//   });

// const cSqr = (n) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(n * n);
//     }, 2000);
//   });
// };

// cSqr(2)
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('任务已处理');
//   });

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let data = { pcode: 1001, pName: 'apple' };
//       resolve(data);
//       reject('Error');
//     }, 2000);
//   });
// }

// console.log('Start');
// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('End');
//   });

//

// cSqr(2)
//   .then((result) => {
//     console.log(result);
//     cSqr(result).then((result1) => {
//       console.log(result1);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('End');
//   });

// cSqr(2)
//   .then((res) => {
//     console.log(res);
//     return cSqr(res);
//   })
//   .then((res1) => {
//     console.log(res1);
//     return cSqr(res1);
//   })
//   .then((res2) => {
//     console.log(res2);
//   });

const pr = new Promise((resolve, reject) => {
  resolve('Over');
  setTimeout(() => {
    resolve('Again');
  }, 2000);
});
pr.then((msg) => {
  console.log(msg);
  return pr;
}).then((msg) => {
  console.log(msg);
});
