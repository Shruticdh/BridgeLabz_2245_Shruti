// Copying:
// Shallow Copy (only copies one level):
// Deep Copy (copies nested objects as well):

const obj1 = { name: "Shruti" };
const copy = { ...obj1 }; 

const obj = { details: { name: "Nivu" } };
const deepCopy = JSON.parse(JSON.stringify(obj)); 

console.log(copy); 
console.log(obj); 
console.log(deepCopy); 