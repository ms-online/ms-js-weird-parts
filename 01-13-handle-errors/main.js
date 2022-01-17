// try {
//   let a = 15;
//   console.log(`A等于${a}`);
//   letb = 50;
//   console.log(`B等于${b}`);
// } catch (err) {
//   console.log('发现错误');
//   console.log(err.name);
//   console.log(err.message);
//   console.log(err.stack);
// }

//throw 运算符
// let age = 15;
// let ageErr = new Error('年龄验证不通过');
// try {
//   if (age < 18) {
//     throw new TypeError('年龄验证不通过');
//   } else {
//     console.log('年龄验证通过');
//   }
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

//finally:无论try和catch中是否产生异常都会执行该代码块
let age = 15;
try {
  if (age < 18) {
    throw new TypeError('年龄验证不通过');
  } else {
    console.log('年龄验证通过');
  }
} catch (error) {
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log('Finally code');
}
