const colorPicker = document.querySelector("#colorPicker");
const colorPreview = document.querySelector("#colorPreview");
const colorHistory = document.querySelector("#colorHistory");
const clearButton = document.querySelector("#clearButton");

function addColorToHistory(color) {
    const colorText = document.createElement("p");

    colorText.textContent = color;
    colorText.style.color = color;
    colorText.style.fontSize = "20px";
    colorText.style.fontWeight = "bold";

    colorHistory.appendChild(colorText);
}

addColorToHistory(colorPicker.value);

// Detect color 
colorPicker.addEventListener("input", function () {
    const selectedColor = colorPicker.value;

    colorPreview.style.backgroundColor = selectedColor;

    addColorToHistory(selectedColor);
});

// Clear color history
clearButton.addEventListener("click", function () {
    colorHistory.innerHTML = "";
});