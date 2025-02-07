// Define a function called subtract that takes two numbers and returns their difference.
// Use typeof to assign the same type as subtract to the mySubtract variable.

function subtract(x: number, y: number): number {
  return x - y;
}

const mySubtract: typeof subtract = function (x, y) {
  return x - y;
};

console.log(mySubtract(10, 5)); // Expected output: 5
