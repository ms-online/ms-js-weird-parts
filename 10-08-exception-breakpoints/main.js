// 异常断点
function sum() {
  let n1 = document.getElementById('n1').value;
  let n2 = document.getElementById('n2').value;

  if (n1 === '' || n2 === '') {
    throw '输入框不能为空';
  }

  let sum = parseInt(n1) + parseInt(n2);
  console.log(sum);
  docuemnt.getElementById('opDiv').innerHTML = sum;
}

add();
