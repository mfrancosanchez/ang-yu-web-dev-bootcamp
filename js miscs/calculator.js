function sum(num1, num2) {
    return num1 + num2
}

function sub(num1, num2) {
    return num1 - num2
}

function mul(num1, num2) {
    return num1 * num2
}

function div(num1, num2) {
    return num1 / num2
}

function calc(num1, num2, operation) {
    return operation(num1, num2)
}

calc(1, 1, sum);