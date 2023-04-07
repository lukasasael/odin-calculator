let num1;
let num2;
let operation;
const symbols = [7, 4, 1, 0, 8, 5, 2, "", 9, 6, 3, "", "÷", "×", "-", "+", "Clear", "", "", "="];

function operate(num1, num2, operation) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (!Number.isInteger(num1) || !Number.isInteger(num2))
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

    return (a + b);
}

function subNum(a, b) {
    return (a - b);
}

function multNum(a, b) {
    return (a * b);
}

function divNum(a, b) {
    return (a / b).toFixed(2);
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
            pixel.addEventListener('click', function handleClick(event) {
                display.textContent = `${display.textContent}${pixel.textContent}`;
            });
            calculator.appendChild(pixel);
            counter = counter + 1;
        }
    }
    const clear = document.querySelector('#pixel16');
    const equal = document.querySelector('#pixel19');

    clear.addEventListener('click', function handleClick(event) {
        display.textContent = "";
    });
    equal.addEventListener('click', function handleClick(event) {
        let displayAll = display.textContent;
        let displayNumbers = displayAll.split(/[^0-9\.]+/);
        let displayOperator = displayAll.split("").filter(item => isNaN(item))[0];
        display.textContent = operate(displayNumbers[0], displayNumbers[1], displayOperator);
        console.log(operate(displayNumbers[0], displayNumbers[1], displayOperator));
        //display.textContent = "";
    });
}

generateDivs()