// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise 1');
//   }, 4000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Promise 2');
//   }, 2000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Promise 3');
//   }, 2000);
// });

// Promise.all([p1, p2, p3])
//   .then((prMsgs) => {
//     console.log(prMsgs);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.allSettled([p1, p2, p3])
//   .then((prMsgs) => {
//     console.log(prMsgs);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.race([p1, p2, p3])
//   .then((prMsgs) => {
//     console.log(prMsgs);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise1');
  }, 2000);
});
const p2 = 'Normal string';
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise3');
  }, 2000);
});

// Promise.resolve('Normal string');
Promise.all([p1, p2, p3])
  .then((prMsgs) => {
    console.log(prMsgs);
  })
  .catch((err) => {
    console.log(err);
  });
