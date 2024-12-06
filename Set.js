// 'use strict'
let array = [1,2,3,4];
// Set
// it contains only unique values
// Object constructor
// add objects arrays . objects , strings and etc.
let obj = new Set(array);
console.log(obj); //to print elements of Set

console.log(obj.size);// to print the size of the set

obj.add(5);//this will add new element in set
console.log(obj);

obj.add(5);// this will not add the 5 not print in set because set only contain unique elements.
console.log(obj);

obj.delete(5)//this will delete the 5
console.log(obj);

var obj1 = {name:"Shruti"};
obj.add(obj1);// this will add new object in set
console.log(obj);

console.log(obj.has(1)); // this will check that elememnt present in set or not 

for(let new1 of obj){
    console.log(new1);
}
obj.forEach((elements) => {
    console.log(elements);
}) // this loop is used iterate through elements in set  

obj.clear(); // this will clear all the set and make it empty
console.log(obj);