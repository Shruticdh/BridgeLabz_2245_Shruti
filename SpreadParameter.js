// Example 1: Combining Arrays

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let num1 = [...arr1,...arr2];
console.log(num1);

// Example 2: Copying Arrays
let arr3 = [...arr1];
console.log(arr3);

// add element to to coopied array 
arr3.push(11);
console.log(arr3);

// Example 3: Combining Objects
let obj1 = {"name" : "Shruti"};
let obj2 = {"age" : 21};
let obj3 = {...obj1 , ...obj2};
console.log(obj3);

// Example 4: Passing Array as Function Arguments
function sum(a,b,c){
    return a+b+c;
}
let num2 = [1,2,3,];
console.log(sum(...num2));


