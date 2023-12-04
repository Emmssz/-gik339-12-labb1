const colorInput = document.getElementById('color-label');
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

