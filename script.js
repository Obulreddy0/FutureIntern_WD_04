let display = document.getElementById('display');
let currentInput = '';

function appendSymbol(symbol) {
    if (currentInput === '0' && symbol === '0') return;
    currentInput += symbol;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function deleteChar() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
    } catch (e) {
        display.textContent = 'Error';
        currentInput = '';
    }
}
