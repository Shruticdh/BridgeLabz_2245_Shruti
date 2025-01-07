// Find Maximum Product of Three Numbers
//Given an integer array, find the maximum product of any three numbers.
let arr=[1,7,6,8,2,3];
let n=arr.length;
arr.sort((a,b)=>a-b);
let ans=arr[n-1]*arr[n-2]*arr[n-3];
console.log(ans);