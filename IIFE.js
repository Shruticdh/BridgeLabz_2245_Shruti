(function() {
    let message = "Hello, World!";
    console.log(message);
})();
// Output: Hello, World!

// `message` is not accessible here
console.log(typeof message); // undefined


// Parameters in IIFE:

(function(name) {
    console.log(`Hello, ${name}!`);
})('Alice');
// Output: Hello, Alice!
