// Create a function called combine that can accept two numbers OR two strings.
// Use function overloading to define two versions of this function.
// If two numbers are passed, return their sum.
// If two strings are passed, return their concatenated (combined) value.

// Function overload signatures
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

// Function implementation
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b; // Suma si ambos son números
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b; // Concatenación si ambos son cadenas
  }
  throw new Error("Invalid input types"); // Manejo de error si los tipos no coinciden
}

// Expected output:
console.log(combine(10, 20)); // 30
console.log(combine("Hello, ", "World!")); // "Hello, World!"

// Opcional: Manejo de error
// console.log(combine(10, "World!")); // Esto lanzará un error porque los tipos son diferentes
