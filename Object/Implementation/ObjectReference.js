// References:
// When you assign an object to another variable, it only copies the reference, not the actual object.

const obj1 = { name: "Shruti" };
const obj2 = obj1; 
obj2.name = "Nivu";
console.log(obj1.name); 
