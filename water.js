const valueInput = document.getElementById('valueInput');
const valueDisplay = document.getElementById('valueDisplay');
function checkQuality() {
    const value = parseFloat(valueInput.value);
    let message = "";
    let cssClass = "";
// Example check for pH level (you can add more checks for other parameters)

if (value >= 6 && value <= 8.5) {
message = "Good Quality";
cssClass = "good";
} else {
message = "Poor Quality - Consider further testing";
cssClass = "bad";
}
valueDisplay.textContent = message;
valueDisplay.classList.add(cssClass);
}