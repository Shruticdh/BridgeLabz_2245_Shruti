// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
const arr=[1,2,3,4,5,6,-1,-2,-3];

function positiveInt(arr){
    let result = arr.filter((num) => num>0);
    return result;
}

let result2 = positiveInt(arr);
console.log(result2);