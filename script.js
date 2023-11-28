const text = document.querySelectorAll('.textfield')
const check = document.getElementById('divStyle')
const btn = document.getElementsByTagName('button')
const div = document.getElementsByClassName('.ettNamn')

console.log(text);
console.log(check);
console.log(btn);
console.log(div);

for (let i = 0; i < check.length; i++) {
    check[i].addEventListener('click', handleClick);
  }

document.getElementById("divStyle").addEventListener("click", changeColor);

    function changeColor() {
        var getColor = document.getElementById('color-label').value;
        var getText = document.getElementById('text-label').value;
        var box = document.getElementsById('ettNamn')

        box.style.backgroundColor = getColor;
        box.innerHTML = getText;
    }



/*
Förslag 2 (behöver utvecklas):


const textInput = document.querySelectorAll('.textfield')
const check = document.getElementById('divStyle')
const btn = document.getElementsByTagName('button')
const settingsDiv = document.getElementsByClassName('.settingsDiv')


console.log(check);
console.log(textInput);

textInput.forEach((field) => field.addEventListener('blur', handleBlur));

for (let i = 0; i < check.length; i++) {
    check[i].addEventListener('click', changeDiv);
}

const targetInfo = document.getElementById('settingsDiv');

function handleBlur(e) {
    const name = e.target.name;
    const value = e.target.value;

    console.log('Name:' +name+ '. Value: ', value)

    if (target.name === 'content') {
        //uppdaterar text
        settingsDiv.innerHTML = content.value;

        //lägger in det i html
        settingsDiv.insertAdjacentElement('beforeend', settingsDiv);
    }
}
    
// koppla eventlyssnare till ett inputfält
const contentInput = document.getElementById('content');
contentInput.addEventListener('input', handleBlur);



*/





    /*
  document.getElementById("test").addEventListener("click", changeColor);
    function changeColor() {
    var color = document.getElementById('colorInput').value;
    var text = document.getElementById('textInput').value;
    var colorBox = document.getElementById('colorBox');
    
    colorBox.style.backgroundColor = color;
    colorBox.innerHTML = text;
*/