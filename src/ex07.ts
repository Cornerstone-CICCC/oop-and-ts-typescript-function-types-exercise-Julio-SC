// Create a function type alias called Operation that accepts two numbers and returns a number.
// Then create a function called calculateMe that uses this Operation type and multiplies two numbers.

type Operation = (a:number, b:number) => number

const calculateMe: Operation = (a, b) => a * b;

console.log(calculateMe(4, 5)); // Expected output: 20