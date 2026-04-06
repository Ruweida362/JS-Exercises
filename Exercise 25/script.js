// 1.Use the spread operator to combine two arrays [1, 2, 3] and [4, 5, 6] into a single array.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];

console.log(combined);

// 2.Create a function multiply that takes any number of arguments and returns their product using the rest parameter.
function multiply(...numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

// Examples
console.log(multiply(2, 3, 4)); // 24
console.log(multiply(5, 10));   // 50
