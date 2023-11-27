function changeColor() {
  var getColor = document.getElementById('color-label').value;
  var getText = document.getElementById('text-label').value;
  var box = document.getElementsById('ettNamn')

  box.style.backgroundColor = getColor;
  box.innerHTML = getText;
}

check.onclick = (changeColor);
const text = document.querySelectorAll('.textfield')
const check = document.getElementById('divStyle')
const btn = document.getElementsByTagName('button')
const div = document.getElementsByClassName('.ettNamn')

console.log(text);
console.log(check);
console.log(btn);
console.log(div);

/*
function changeColor() {
var color = document.getElementById('colorInput').value;
var colorBox = document.getElementById('colorBox');

colorBox.style.backgroundColor = color;
}
*/



document.getElementById("divStyle").addEventListener("clicked", changeColor);


/* document.getElementById("divStyle").addEventListener("clicked", changeColor); */

function changeColor() {
  var getColor = document.getElementById('color-label').value;
  var getText = document.getElementById('text-label').value;
  var box = document.getElementsById('ettNamn')
    function changeColor() {
        var getColor = document.getElementById('color-label').value;
        var getText = document.getElementById('text-label').value;
        var box = document.getElementsById('ettNamn')

  box.style.backgroundColor = getColor;
  box.innerHTML = getText;
}

        box.style.backgroundColor = getColor;
        box.innerHTML = getText;
    }

    check.onclick = (changeColor);
/*
document.getElementById("test").addEventListener("click", changeColor);
function changeColor() {
var color = document.getElementById('colorInput').value;
var text = document.getElementById('textInput').value;
var colorBox = document.getElementById('colorBox');

colorBox.style.backgroundColor = color;
colorBox.innerHTML = text;
*/