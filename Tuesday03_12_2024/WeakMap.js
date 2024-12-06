// WeakMap
// Stores only objects
// no iteration 
let wm = new WeakMap();
var obj1 = {};
var obj2 = {};
wm.set(obj1, "Private");
wm.set(obj2,"public");
console.log(wm);
console.log(wm.has(obj1)); 