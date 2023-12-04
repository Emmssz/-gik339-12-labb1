//hämtar in de olika elementen från html-koden
const colorInput = document.getElementById('color');
const textInput = document.getElementById('text');
const divBox = document.getElementById('changingDiv');
const btn = document.getElementById('btnId');
const checkbox = document.getElementById('divStyle');

//lägger till eventlyssnare för textfälten och checkrutan
colorInput.addEventListener('input', applyChanges);
textInput.addEventListener('input', applyChanges);
checkbox.addEventListener('change', applyChanges);

//eventlyssnare för när användaren klickar på knappen 'ta bort'
btn.addEventListener('click', function() {
    // gömmer div-elementet
    divBox.style.display = 'none'; 
});

//funktion för de olika ändringarna som sker (färg och text)
function applyChanges() {
    //hämtar in värden för färg och text (content)
    const getColor = colorInput.value;
    const getText = textInput.value;

    //if sats för om checkrutan är ikryssad
    if (checkbox.checked) {
        divBox.style.backgroundColor = getColor;
        divBox.innerText = getText;
        //div-elementet visas om checkboxen är markerad och det finns innehåll
        divBox.style.display = 'block';
    //else sats för om checkrutan inte är ikryssad
    } else {
        //göm div-elementet om checkboxen inte är markerad eller det inte finns innehåll
        divBox.style.display = 'none';
    }
} 


/* Nytt förslag (för att få till det med rätt antal variabler, dvs 4, osv)
// deklarerar variabler, och hämtar in de olika elementen från html-koden
const checkbox = document.getElementById('divStyle');
const textFields = document.getElementsByClassName('textfield');
const removeBtn = document.getElementById('removeBtn');
const changingDiv = document.getElementById('changingDiv');

// skriver ut avsändaren (target) till konsolen
function handleInputEvent(e) {
    console.log('Den här händelsen genererades av:', e.target);
    const fieldName = e.target.name;

    if (fieldName === 'content') {
        changingDiv.innerHTML = e.target.value;
    }
}

// for-loop som används för att koppla eventlyssnare till text-fields
for (let i = 0; i < textFields.length; i++) {
    textFields[i].addEventListener('input', handleInputEvent);
    textFields[i].addEventListener('blur', handleInputEvent);
}

// eventlyssnare för när ändringar sker i checkboxen (som en anonym funktion)
checkbox.addEventListener('change', function () {
    const colorInput = document.getElementById('color');
    const color = colorInput.value;
    changingDiv.style.backgroundColor = color;
});

// eventlyssnare för när användaren klickar på knappen (som en anonym funktion)
removeBtn.addEventListener('click', function () {
    changingDiv.remove();
});
*/









/*const colorInput = document.getElementById('color-label');
const textInput = document.getElementById('text-label');
const divBox = document.getElementById('changingDiv');
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

//bör ses över, div tas ej bort

// tar bort div-elementet
btn.addEventListener("click", deleteDiv);

function deleteDiv() {
  const removeElement = document.getElementById('changingDiv');
  removeElement.remove();
}

*/


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