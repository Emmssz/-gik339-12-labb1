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
    var color = document.getElementById('colorInput').value;
    var colorBox = document.getElementById('colorBox');
    
    colorBox.style.backgroundColor = color;
  }