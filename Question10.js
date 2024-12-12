// 10. Calculate the sum of numbers in an array of numbers

let arr = [22,3,44,56,76,78];
let result = arr.reduce((sum , num) => sum += num , 0);
console.log(result);