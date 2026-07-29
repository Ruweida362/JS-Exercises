
function operate(a, b, callback) {
    return callback(a, b);
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
console.log("Addition:", operate(5, 7, add));           
console.log("Subtraction:", operate(15, 9, subtract));    
console.log("Multiplication:", operate(5, 3, multiply)); 
console.log("Division:", operate(6, 2, divide));         


