
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

// Listen for keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key.match(/[0-9+\-*/.=]|Enter/)) {
        if (key === 'Enter') {
            calculate();
        } else {
            appendToDisplay(key);
        }
        event.preventDefault();
    } else if (key === 'Backspace') {
        clearDisplay();
        event.preventDefault();
    }
});
