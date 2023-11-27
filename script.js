const text = document.querySelectorAll('.textfield')
const check = document.getElementById('divStyle')
const btn = document.getElementsByTagName('button')
const div = document.getElementsByClassName('.ettNamn')

console.log(text);
console.log(check);
console.log(btn);
console.log(div);

for (let i = 0; i < check.length; i++) {
    check[i].addEventListener('click', handleCheck);
}

function changeColor() {
    var color = document.getElementById('.input-settings.color').value;
    var colorBox = document.getElementById('.input-settings.content');
    
    colorBox.style.backgroundColor = color;
  }