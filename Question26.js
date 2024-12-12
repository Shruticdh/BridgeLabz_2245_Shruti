// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second.
let arr1 = [1,2,3,4,5,6];
let arr2 = [5,6,9,10,11];

let arr3 = [];
function mereduniquearray(arr1 , arr2){

for(let num of arr1){
    if(!arr2.includes(num)){
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
    let arr4 = arr1.filter((num) => !arr2.includes(num));
    return arr4;
}
let result2 = mergeArrays(arr1 , arr2);
console.log(result2);