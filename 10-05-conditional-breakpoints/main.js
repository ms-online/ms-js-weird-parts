var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');

//获取输入框的值
function getNumber1() {
  return inputs[0].value;
}
function getNumber2() {
  return inputs[1].value;
}
//事件监听
button.addEventListener('click', onClick);

//点击事件
function onClick() {
  if (inputsAreEmpty()) {
    label.innerHTML = '出错了: 输入框不能为空.';
    return;
  }
  updateLabel();
}
//是否为空
function inputsAreEmpty() {
  if (getNumber1() === '' || getNumber2() === '') {
    return true;
  } else {
    return false;
  }
}

//更新结果
function updateLabel() {
  var addend1 = getNumber1();
  // console.log('addend1', addend1);
  var addend2 = getNumber2();
  // console.log('addend2', addend2);
  var sum = parseInt(addend1) + parseInt(addend2);
  // console.log('sum', sum);
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}

// console.log('a');
// console.log('b');
// debugger;
// console.log('c');
