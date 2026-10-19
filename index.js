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
    if (b!=0)
    {
        return a / b
    }
    // alert("any number divisible by zero is undefined")
    return "number cannot be divided by zero"
}


let operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
}

function operate(a, sign, b) {
    if (!operations[sign]) {
        return "Error";
    }

    const answer = operations[sign](a, b)
    
    if (typeof answer != "number" ||  !Number.isFinite(answer))
    {
       return typeof answer === "string" ? answer : "Error";
    }

    // Round long decimals without forcing unnecessary trailing zeros.
    return Number(answer.toFixed(8));
}

let first_number = ""
let operation = ""
let second_number = ""

let first_store = true
let result_shown = false;
let display

function toggle() {
    if (first_store == true) {
        first_store = false
    }
    else {
        first_store = true
    }
}

function dual() {
    if (first_number != "" && second_number != "") {
        return true
    }
    else {
        return false
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
            if (result_shown) {
    first_number = "";
    operation = "";
    second_number = "";
    first_store = true;
    result_shown = false;
}
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
    first_store = true
    result_shown = false;
    Screen_display(display)
})

function util() {
    if (!dual() || operation === "") {
        return;
    }

    display = result(first_number, operation, second_number);
    Screen_display(display);

    // Keep an error message from becoming the next number.
    if (typeof display !== "number") {
        first_number = "";
        second_number = "";
        operation = "";
        first_store = true;
        return;
    }

    // Store the result for a possible next operation.
    first_number = String(display);
    second_number = "";
    operation = "";
    first_store = true;
    result_shown = true;
}

let equals = document.querySelector(".equals")
equals.addEventListener("click", () => {

    util()
})

function event_operations(sign) {
    if (first_number === "") {
        return;
    }

    if (dual()) {
        util();
    }

    result_shown = false;
    operation = sign;
    first_store = false;

    display = displays(first_number, operation, second_number);
    Screen_display(display);
}

let adds = document.querySelector("#add")
adds.addEventListener("click", () => {
    if (dual()) {
        util()
    }
    event_operations("+")
})

let subtracts = document.querySelector("#subtract")
subtracts.addEventListener("click", () => {
    if (dual()) {
        util()
    }
    event_operations("-")
})

let multiplies = document.querySelector("#multiply")
multiplies.addEventListener("click", () => {
    if (dual()) {
        util()
    }
    event_operations("*")
})

let divides = document.querySelector("#divide")
divides.addEventListener("click", () => {
    if (dual()) {
        util()
    }
    event_operations("/")
})