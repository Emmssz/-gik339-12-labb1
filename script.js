//UPPGIFT 4
//deklarerar variabler, och hämtar in de olika elementen från html-koden
const checkbox = document.querySelector('.checkbox');
const textFields = document.getElementsByClassName('textfield');
const removeBtn = document.getElementsByTagName('button')[0];
const changingDiv = document.getElementById('changingDiv');

//UPPGIFT 5
//skriver ut avsändaren (target) till konsolen
function handleInput(e) {
    //console-log används för att skriva ut informationen till konsolen 
    console.log('Den här händelsen genererades av:', e.target);
    //deklarerar en variabel 
    const infoPrint = e.target.name;

    //if-loop som gäller när name-attributet är content
    if (infoPrint === 'content') {
        //skriver ut användarens text i div:en med innerHTML
        changingDiv.innerHTML = e.target.value;
    }
}

//for-loop som används för att koppla eventlyssnare till text-fields
for (let i = 0; i < textFields.length; i++) {
    textFields[i].addEventListener('input', handleInput);
    textFields[i].addEventListener('blur', handleInput);
}

//UPPGIFT 6
//eventlyssnare för när ändringar sker i checkboxen (som en anonym funktion)
checkbox.addEventListener('change', function () {
    const colorInput = document.getElementById('color');
    const color = colorInput.value;
    changingDiv.style.backgroundColor = color;
});

//eventlyssnare för när användaren klickar på knappen (som en anonym funktion)
removeBtn.addEventListener('click', function () {
    changingDiv.remove();
});