// 52. Calculate Fibonacci(500) with high precision (all digits)
let n =500;
function fibonacci(n){
    let a = BigInt(0);
    let b = BigInt(1);
    for(let i=2; i<=n; i++){
        let num = a+b;
        a = b;
        b = num;
    }
    return b;
}
let result=fibonacci(n);
console.log(result.toString());