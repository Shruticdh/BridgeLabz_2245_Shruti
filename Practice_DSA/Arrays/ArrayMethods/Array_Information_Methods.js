let arr = [2,4,6,8,10,3,5,7,9];
let arr2 = [10,11,12,13,14,15,16];

// length - Array ke length ko return karta hai.
console.log(arr.length);  

// concat() - Multiple arrays ko merge karta hai.
let merged = arr.concat(arr2);
console.log(merged);

// join() - Array ko ek string mein convert karta hai with a specified separator.
let arr3 = ['apple', 'banana', 'cherry'];
let str = arr3.join(', ');
console.log(str); 

// slice() - Array ka shallow copy banata hai given range mein.
let sliced = arr.slice(3);  // Extracts elements from index 1 to 2
console.log(sliced); 

// keys() - Array ke indices ka iterator return karta hai.

// values() - Array ke values ka iterator return karta hai.
// entries() - Array ke key-value pairs ka iterator return karta hai.
// isArray() - Check karta hai agar object ek array hai ya nahi.
console.log(Array.isArray(arr)); 

// from() - Converts an iterable or array-like object into an array.
let str1 = 'hello';
let arr1 = Array.from(str1);
console.log(arr1);  
// of() - Creates a new array with a variable number of elements.