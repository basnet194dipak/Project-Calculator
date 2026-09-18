function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}


operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
}

function operate(a, sign, b) {
    return operations[sign](a, b)
}

module.exports = operate