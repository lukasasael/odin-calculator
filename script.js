const symbols = [7, 4, 1, 0, 8, 5, 2, ".", 9, 6, 3, "", "÷", "×", "-", "+", "Clear", "Del", "", "="];
const breakpoint = (/[\÷\×\+\-\=]+/)

function operate(numbers, operators) {
    let num1 = parseFloat(numbers[0]);
    let num2;
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] == ("="))
            return num1;
        num2 = parseFloat(numbers[i + 1]);

        if (isNaN(num1) || isNaN(num2))
            return "Invalid Input";
        switch (operators[i]) {
            case '+':
                num1 = addNum(num1, num2);
                break;
            case '-':
                num1 = subNum(num1, num2);
                break;
            case '×':
                num1 = multNum(num1, num2);
                break;
            case '÷':
                num1 = divNum(num1, num2);
                break;
            default:
                return "Invalid Input";
        }
    }
    return num1;
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
    const del = document.querySelector('#pixel17');
    const equal = document.querySelector('#pixel19');

    clear.addEventListener('click', function handleClick() {
        display.textContent = "";
    });
    del.addEventListener('click', function handleClick() {
        let newDisplay = display.textContent.split("");
        for (let i = 4; i > 0; i--) {
            newDisplay.pop();
        }
        display.textContent = newDisplay.join("");
    });
    equal.addEventListener('click', function handleClick() {
        let displayNumbers = display.textContent.split(breakpoint);
        let displayOperators = filterOperator(display.textContent);
        display.textContent = operate(displayNumbers, displayOperators);
    });

}

function filterOperator(array) {
    let operatorsArray = [];
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i]) && !(array[i] == (".")))
            operatorsArray.push(array[i]);
    }
    return operatorsArray;
}

generateDivs()