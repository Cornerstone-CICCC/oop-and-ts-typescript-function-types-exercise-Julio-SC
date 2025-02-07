// Create a function called sumAllNumbers.
// This function should accept any number of numbers using a rest parameter.
// It should return the sum of all the numbers passed to it.

function sumAllNumbers(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Expected output:
console.log(sumAllNumbers(1, 2, 3, 4, 5)); // 15
console.log(sumAllNumbers(10, 20, 30));    // 60