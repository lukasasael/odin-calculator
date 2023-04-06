let num1;
let num2;
let operation;
const symbols = [7, 4, 1, 0, 8, 5, 2, "", 9, 6, 3, "", "÷", "×", "-", "+", "Clear", "", "", "="];

function operate(num1, num2, operation) {
    switch (operation) {
        case '+':
            addNum(num1, num2)
        case '-':
            subNum(num1, num2)
        case '*':
            multNum(num1, num2)
        case '/':
            divNum(num1, num2)
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
    return (a / b);
}

function generateDivs() {
    const calculator = document.querySelector('#calculator');
    let counter = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 4; j++) {
            const pixel = document.createElement('btn');
            pixel.classList.add('pixel');
            pixel.setAttribute("id", "pixel" + counter);
            pixel.textContent = symbols[counter];
            pixel.addEventListener('click', function handleClick(event) {
                pixel.style.backgroundColor = "grey";
            });
            calculator.appendChild(pixel);
            counter = counter + 1;
        }
    }
}
generateDivs()