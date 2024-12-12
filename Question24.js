// 24. Create a function that will merge two arrays and return the result as a new array
let arr1 = [1,2,3,4,5,6];
let arr2 = [7,8,9,10,11];
let arr3 = [];
function mergeArrays(arr1 , arr2){
    arr3 = [...arr1 , ...arr2];
    return arr3;
}
let result = mergeArrays(arr1 , arr2);
console.log(result);