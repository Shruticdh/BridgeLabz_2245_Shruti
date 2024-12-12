// 13. Find the maximum number in an array of numbers

const arr = [22,45,65,78,98,56,7,34,23];

function maximumNumber(arr){
    let maximum2 = arr.reduce((max,num) => max > num ? max:num , 0);
    return maximum2;  
}
let result = maximumNumber(arr);
console.log(result);