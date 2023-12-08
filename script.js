//UPPGIFT 4
//deklarerar variabler, och hämtar in de olika elementen från html-koden
const checkbox = document.querySelector('.checkbox');
const textFields = document.getElementsByClassName('textfield');
const removeBtn = document.getElementsByTagName('button')[0];
const changingDiv = document.getElementById('changingDiv');

//UPPGIFT 5
//skriver ut avsändaren (target) till konsolen + content i div:en
function handleInput(e) {
    //console-log används för att skriva ut informationen till konsolen 
    console.log('Den här händelsen genererades av:', e.target);
    //deklarerar en variabel med namn-värdet på elementet
    const infoPrint = e.target.name;

    //if-loop som gäller när name-attributet är content
    if (infoPrint === 'content') {
        //skriver ut användarens text i div:en med innerHTML
        changingDiv.innerHTML = e.target.value;
    }
}

//UPPGIFT 6
//for-loop som används för att koppla eventlyssnare till text-fields
for (let i = 0; i < textFields.length; i++) {
    //eventlyssnare som reagerar på att användaren skriver in info (vilket skriver ut info i konsolen)
    textFields[i].addEventListener('input', handleInput);
    //eventlyssnare som reagerar på att användaren lämnar textfältet (vilket skriver ut info i konsolen)
    textFields[i].addEventListener('blur', handleInput);
}

//eventlyssnare för när ändringar sker i checkboxen (som en anonym funktion)
checkbox.addEventListener('change', function () {
    //hämtar in color från html och sparar ner det i en variabel
    const colorInput = document.getElementById('color');
    //hämtar värdet, det användaren skrev in i färg-textfältet, och sparar i en variabel
    const color = colorInput.value;
    //ändrar bakgrundsfärgen på div:en enligt det användaren angav (använder variabeln ovan)
    changingDiv.style.backgroundColor = color;
});

//eventlyssnare för när användaren klickar på knappen (som en anonym funktion)
removeBtn.addEventListener('click', function () {
    //använder remove() för att ta bort div:en från sidan
    changingDiv.remove();
});