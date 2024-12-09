// Syntax of NFE
const myFunction = function functionName() {
    // `functionName` is available inside the function
    console.log("This is a named function expression.");
};


// Example of NFE
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1); // Using the function's internal name `fact`
};

console.log(factorial(5)); // Output: 120

// `fact` is not accessible here
console.log(typeof fact); // Output: undefined

