const colorInput = document.getElementById('color-label');
const textInput = document.getElementById('text-label');
const divBox = document.getElementById('ettNamn');
const btn = document.getElementById('btnId');
const checkbox = document.getElementById('divStyle');

colorInput.addEventListener('input', applyChanges);
textInput.addEventListener('input', applyChanges);
checkbox.addEventListener('change', applyChanges);

function applyChanges() {
    const getColor = colorInput.value;
    const getText = textInput.value;

    if (checkbox.checked) {
        divBox.style.backgroundColor = getColor;
        divBox.innerText = getText;
    } else {
        divBox.style.backgroundColor = '';
        divBox.innerText = '';
    }
}

/*bör ses över, div tas ej bort*/

// koppla eventlyssnare till ett inputfält
const contentInput = document.getElementById('content');
contentInput.addEventListener('input', handleBlur); 

// ta bort div elementet
btn.addEventListener("click", deleteDiv);

function deleteDiv() {
  const removeElement = document.getElementById('changingDiv');
  removeElement.remove();
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