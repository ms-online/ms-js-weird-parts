// function fetchData(cb) {
//   setTimeout(() => {
//     let data = { pcode: 1001, pName: 'apple' };
//     cb(data);
//   }, 2000);
// }

// console.log('Start');
// fetchData(function (data) {
//   console.log(data);
//   console.log('End');
// });

function cSqr(n, cb) {
  setTimeout(() => {
    cb(n * n);
  }, 1000);
}

cSqr(2, function (res) {
  console.log(res);
  cSqr(res, function (res1) {
    console.log(res1);
    cSqr(res1, function (res2) {
      console.log(res2);
    });
  });
});
