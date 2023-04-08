let num1;
let num2;
let operation;
const symbols = [7, 4, 1, 0, 8, 5, 2, ".", 9, 6, 3, "", "÷", "×", "-", "+", "Clear", "", "", "="];

function operate(num1, num2, operation) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (isNaN(num1) || isNaN(num2))
        return "Invalid Input";
    switch (operation) {
        case '+':
            return addNum(num1, num2);
        case '-':
            return subNum(num1, num2);
        case '×':
            return multNum(num1, num2);
        case '÷':
            return divNum(num1, num2);
        default:
            return "Invalid Input";
    }
}

function addNum(a, b) {

    return Math.round((a + b) * 100) / 100;
}

function subNum(a, b) {
    return Math.round((a - b) * 100) / 100;
}

function multNum(a, b) {
    return Math.round((a * b) * 100) / 100;
}

function divNum(a, b) {
    return Math.round((a / b) * 100) / 100;
}

function generateDivs() {
    const calculator = document.querySelector('#calculator');
    const display = document.querySelector('#display');
    let counter = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 4; j++) {
            const pixel = document.createElement('btn');
            pixel.classList.add('pixel');
            pixel.setAttribute("id", "pixel" + counter);
            pixel.textContent = symbols[counter];
            pixel.style.backgroundColor = "#CDCDCD";
            pixel.addEventListener('click', function handleClick() {
                display.textContent = `${display.textContent}${pixel.textContent}`;
            });
            calculator.appendChild(pixel);
            counter = counter + 1;
        }
    }
    const clear = document.querySelector('#pixel16');
    const equal = document.querySelector('#pixel19');

    clear.addEventListener('click', function handleClick() {
        display.textContent = "";
    });
    equal.addEventListener('click', function handleClick() {
        const breakpoint = (/[\÷\×\+\-\=]+/)
        let displayNumbers = display.textContent.split(breakpoint);
        let displayOperator = filterOperator(display.textContent);
        display.textContent = operate(displayNumbers[0], displayNumbers[1], displayOperator);
        console.log(operate(displayNumbers[0], displayNumbers[1], displayOperator));
    });
}

function filterOperator(array) {
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i]) && !(array[i] == (".")))
            return array[i];
    }
}

generateDivs()