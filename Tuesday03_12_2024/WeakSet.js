// WeakSet
// We can only store only objects 
// doesnot have size property and cannot iterate 
// it can not be iterated
let ws = new WeakSet();
var obj1 = {};
var obj2 = {};
var obj3 = {"name":"Shruti"};
ws.add(obj1);
ws.add(obj2);
ws.add(obj3);
console.log(ws);
ws.delete(obj1);
console.log(ws);
console.log(ws.has(obj3)); 
let weakSet = new WeakSet();
let obj = {"name" : "Shruti"};
weakSet.add(obj);
console.log(weakSet);
console.log(weakSet.has(obj)); // true