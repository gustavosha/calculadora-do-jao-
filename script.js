function appendToDisplay(value) {
    const display = document.getElementById('display');

    if (value === '%') {
        display.value += value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const expression = document.getElementById('display').value;
    try {
        const cleanedExpression = expression.replace(/%/g, '/100');
        const result = eval(cleanedExpression);

        if (!isNaN(result)) {
            document.getElementById('display').value = result;
        } else {
            document.getElementById('display').value = 'Erro';
        }
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}
