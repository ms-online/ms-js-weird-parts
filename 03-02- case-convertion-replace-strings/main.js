let str = 'Test123';
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str.toLowerCase() === 'test');
// console.log(str.toUpperCase() === 'TEST');

// console.log(str.replace('123', '!'));

function getValue() {
  checkValue = prompt('请输入英文字符:');
  checkValue = checkValue.toLowerCase();
  if (
    checkValue == 'a' ||
    checkValue == 'e' ||
    checkValue == 'i' ||
    checkValue == 'o' ||
    checkValue == 'u'
  ) {
    console.log('元音');
  } else {
    console.log('辅音');
  }
}

getValue();
