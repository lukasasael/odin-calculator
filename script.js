let num1;
let num2;
let operation;

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
