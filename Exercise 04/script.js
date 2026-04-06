//  Exercise 04: Create a function named **add** that takes two numbers as arguments and returns their sum.
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // 15
console.log(add(35, 10)); // 45
console.log(add(25, 210)); // 235
console.log(add(5, 120)); // 125


// Function Expressions:
const Add = function(a, b) {
    return a + b;
};
console.log(Add(10, 5)); // 15
console.log(Add(35, 10)); // 45
console.log(Add(25, 210)); // 235
console.log(Add(5, 120)); // 125
