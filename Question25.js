// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
let arr1 = [1,2,3,4,5,6];
let arr2 = [5,6,9,10,11];

let arr3 = [];
function mereduniquearray(arr1 , arr2){

for(let num of arr1){
    if(!arr2.includes(num)){
        arr3.push(num);
    }
}
for(let num of arr2){
    if(!arr1.includes(num)){
        arr3.push(num);
    }
}
return arr3;
}

let result = mereduniquearray(arr1 , arr2);
console.log(result);


// second method
let arr4 = [];
function mergeArrays(arr1 , arr2){
    let i = arr1.filter((num) => !arr2.includes(num));
    let j = arr2.filter((num2) => !arr1.includes(num2));
    arr4 = [...i , ...j];
    return arr4;
}
let result2 = mergeArrays(arr1 , arr2);
console.log(result2);