function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (value === ',') {
        const currentValue = display.value;
        const lastChar = currentValue.slice(-1);

        // Verifica se o último caractere é um número ou fecha parêntese
        if (!isNaN(parseInt(lastChar)) || lastChar === ')') {
            display.value += value;
        }
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
        let result;
        if (expression.includes('PA(')) {
            // Calcular Progressão Aritmética
            const values = expression.split('PA(')[1].split(')')[0].split(',');
            const a = parseFloat(values[0]);
            const n = parseFloat(values[1]);
            const d = parseFloat(values[2]);
            result = a + (n - 1) * d;
        } else if (expression.includes('PG(')) {
            // Calcular Progressão Geométrica
            const values = expression.split('PG(')[1].split(')')[0].split(',');
            const a = parseFloat(values[0]);
            const n = parseFloat(values[1]);
            const r = parseFloat(values[2]);
            result = a * Math.pow(r, n - 1);
        } else if (expression.includes('log(')) {
            // Calcular Logaritmo
            const values = expression.split('log(')[1].split(')')[0].split(',');
            const base = parseFloat(values[0]);
            const number = parseFloat(values[1]);
            result = Math.log(number) / Math.log(base);
        } else {
            // Avaliar outras expressões
            result = eval(expression);
        }

        if (!isNaN(result)) {
            document.getElementById('display').value = result;
        } else {
            document.getElementById('display').value = 'Erro';
        }
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}
