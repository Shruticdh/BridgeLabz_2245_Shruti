// 18. Print the first 100 prime numbers

let n = 100;
function prime(n){
    if (n === 0 || n === 1){
        return false;
    }
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    } 
    return true;
}

let count = 0;
for(let i=2; i<=n; i++){
    if(prime(i) === true){
        console.log(i);
        count++;
    }
}
