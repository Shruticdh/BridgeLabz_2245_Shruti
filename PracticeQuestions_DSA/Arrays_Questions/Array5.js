//Find the Missing Number
// Given an array of size n, containing numbers from 1 to n+1, find the missing number.
// Find the Missing Number
let arr = [1, 2, 4, 5];
let n = 5;

let totalSum = (n * (n + 1)) / 2;

let actualSum = 0;
for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
}


let missing= totalSum - actualSum;
console.log(missing);
