// 15. Create a function that will find the nth Fibonacci number using recursion

let n = 20;
let arr = [0,1];

function fibonacii(n , arr){
    for(let i=2; i<=n; i++){
        if(arr[i] === 0) return 0;
        if(arr[i] === 1) return 1;
        let number = arr[i-1] + arr[i-2];
        arr.push(number);
    }
    return arr;
}
let result = fibonacii(n , arr);
console.log(result);