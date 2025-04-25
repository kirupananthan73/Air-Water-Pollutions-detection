const phInput = document.getElementById('phInput');
const organicMatterInput =
document.getElementById('organicMatterInput');
const qualityDisplay = document.getElementById('qualityDisplay');

function checkQuality() {
const ph = parseFloat(phInput.value);
const organicMatter = parseFloat(organicMatterInput.value);
let message = "";
let cssClass = "";
// Example check for pH and Organic Matter (adjust based on your soil type)

if (ph >= 6.0 && ph <= 7.5 && organicMatter >= 2.0) {
message = "Good Quality - Ideal for plant growth";
cssClass = "good";
} else if ((ph >= 5.5 && ph <= 8.0) || (organicMatter >= 1.0 &&
organicMatter < 2.0)) {
message = "Needs Improvement - Consider amendments";
cssClass = "needsImprovement";
} else {
message = "Poor Quality - Requires significant improvement";
cssClass = "poor";
}
qualityDisplay.textContent = message;
qualityDisplay.classList.add(cssClass);
}