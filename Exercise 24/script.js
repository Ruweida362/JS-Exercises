function calculateArea(width, height = width) {
  return width * height;
}
console.log(calculateArea(5, 10)); // Rectangle: 50
console.log(calculateArea(4));     // Square: 16