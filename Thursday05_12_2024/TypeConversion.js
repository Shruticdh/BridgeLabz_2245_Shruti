
// 1. Implicit Type Conversion (Type Coercion)

// a) String Conversion:

let result = "The answer is " + 42;
console.log(result); // "The answer is 42"

// (b) Numeric Conversion:

let result2 = "5" - 3;  // "5" is converted to a number
console.log(result);   // 2

let addition = "5" + 3;  // "+" concatenates strings
console.log(addition);   // "53

// (c) Boolean Conversion:
// Falsy Values: false, 0, "", null, undefined, NaN
// Truthy Values: Everything else

if ("hello") {
    console.log("Truthy!"); // This will execute
}
  
if (0) {
    console.log("Falsy!"); // This will not execute
}

// 2. Explicit Type Conversion (Type Casting)
// String Conversion
// 1.String(value)

let num = 42;
console.log(String(num)); // "42"

// 2.value.toString()

let num2 = 42;
console.log(num.toString()); // "42"


// Number Conversion

// Number(value)
console.log(Number("123"));    // 123
console.log(Number("12abc")); // NaN

// parseInt(value, base);
console.log(parseInt("42"));     // 42
console.log(parseInt("101", 2)); // 5 (binary to decimal)

// parseFloat(value):
console.log(parseFloat("3.14")); // 3.14

// Boolean Conversion
console.log(Boolean(1));    // true
console.log(Boolean(0));    // false
console.log(Boolean(""));   // false
console.log(Boolean("Hi")); // true


// Converting Arrays to Strings
let arr = [1, 2, 3];
console.log(String(arr));    // "1,2,3"
console.log(arr.toString()); // "1,2,3"









