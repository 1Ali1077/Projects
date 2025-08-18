const screen = document.getElementById("screen");

function appendToScreen(input) {
    screen.value += input;
}

function clearScreen() {
    screen.value = "";
}

function calculate() {
    
        const numbers = screen.value.split(/[×+\-÷]/).map(n => parseFloat(n));
        const operators = screen.value.split(/[0-9.]+/).filter(Boolean);

        if (numbers.length === 2 && operators.length === 1) {
            const num1 = numbers[0];
            const num2 = numbers[1];
            const operator = operators[0];

            if (operator === '×') {
                result = num1 * num2;

            } else if (operator === '+') {
                result = num1 + num2;

            } else if (operator === '-') {
                result = num1 - num2;

            } else if (operator === '÷') {
                if (num2 === 0) {
                    result = "Divide by zero";
                } else {
                    result = num1 / num2;
                }
            }
            screen.value = result;
        }
}