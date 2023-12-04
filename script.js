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