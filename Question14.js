// 14. Print the first 10 Fibonacci numbers without recursion
let n = 10;
let arr = [0,1];
for(let i=2; i<=n; i++){
let number = arr[i-1] + arr[i-2];
arr.push(number);
}
console.log(arr);