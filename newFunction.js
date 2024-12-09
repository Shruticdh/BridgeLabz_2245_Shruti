// Simple Function Creation
const sum = new Function('a', 'b', 'return a + b;');
console.log(sum(2, 3)); // Output: 5


// Function Without Parameters
const sayHello = new Function('console.log("Hello, World!");');
sayHello(); // Output: Hello, World!

// Dynamically Constructed Function
const operation = "a * b";
const multiply = new Function('a', 'b', `return ${operation};`);
console.log(multiply(4, 5)); // Output: 20
