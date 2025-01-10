// var Hoisting:
// Variables declared with var are hoisted with a default value of undefined

console.log(a); // undefined
var a = 5;
console.log(a);

// let and const Hoisting:
// Variables declared with let and const are hoisted but remain in a "temporal dead zone" until they are initialized. Accessing them before initialization throws a ReferenceError

console.log(b); // ReferenceError
let b = 10;
