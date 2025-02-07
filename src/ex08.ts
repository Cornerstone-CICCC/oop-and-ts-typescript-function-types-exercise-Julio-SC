// Create a type alias for a greeting function that takes a name (string).
// Then create a function that uses this type and returns a greeting message.

type GreetingFunction = (name:string) => string

const greeting:GreetingFunction = (name) => { return `Hello, ${name}`

}

console.log(greeting("Alice")); // Expected output: Hello, Alice!