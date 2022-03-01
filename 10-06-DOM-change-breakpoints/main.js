// 子树修改
function addNode() {
  const node = document.createElement('p');
  node.textContent = 'Hello World';
  node.addEventListener('click', () => node.remove());
  document.getElementById('smbOutputDiv').appendChild(node);
}

//属性修改
// function changeColor() {
//   const ptext = document.getElementById('para');
//   ptext.style.color = 'red';
// }
