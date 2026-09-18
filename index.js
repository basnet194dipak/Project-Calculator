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


let operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
}

function operate(a, sign, b) {
    return operations[sign](a, b)
}

let first_number = ""
let operation = ""
let second_number = ""

let first_store = true
let display

function toggle() {
    if (first_store == true) {
        first_store = false
    }
    else {
        first_store = true
    }
}

function displays(first_number, operation, second_number) {
    return first_number + operation + second_number
}

function Screen_display(display) {
    screen = document.querySelector(".screen")
    screen.innerText = display
}

function result(first_number, operation, second_number) {
    first_number = parseFloat(first_number)
    second_number = parseFloat(second_number)
    return operate(first_number, operation, second_number)
}

document.addEventListener("DOMContentLoaded", () => {
    numbers = document.querySelector(".numbers")
    for (let i = 0; i < 10; i++) {
        buttons = document.createElement("button")
        buttons.value = i
        buttons.innerText = i
        buttons.addEventListener("click", (e) => {
            // console.log(e.target.value)
            if (first_store == true) {
                first_number = first_number + e.target.value
            }
            else {
                second_number = second_number + e.target.value
            }
            console.log(first_store)
            display = displays(first_number, operation, second_number)
            console.log("first", first_number)
            console.log("operations: ", operation)
            console.log("seconds", second_number)
            Screen_display(display)
        })
        numbers.appendChild(buttons)
    }
})

let clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    display = ""
    first_number = ""
    operation = ""
    second_number = ""
    Screen_display(display)
})


let equals = document.querySelector(".equals")
equals.addEventListener("click", () => {
    // get the final results
    display = result(first_number, operation, second_number)
    Screen_display(display)
    // switch back to storing in first number
    toggle()
    // store the result in first number
    first_number = display
    // reset the second number to empty
    second_number = ""

})

function event_operations(sign) {
    toggle()
    operation = sign
    display = displays(first_number, operation, second_number)
    // console.log(first_number, operations, second_number, first_store)
    Screen_display(display)
}

let adds = document.querySelector("#add")
adds.addEventListener("click", () => {
    event_operations("+")
})

let subtracts = document.querySelector("#subtract")
subtracts.addEventListener("click", () => {
    event_operations("-")
})

let multiplies = document.querySelector("#multiply")
multiplies.addEventListener("click", () => {
    event_operations("*")
})

let divides = document.querySelector("#divide")
divides.addEventListener("click", () => {
    event_operations("/")
})