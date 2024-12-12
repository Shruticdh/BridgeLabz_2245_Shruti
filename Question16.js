// 16. Create a function that will return a Boolean specifying if a number is prime
let n=13;
function isprime(n){
    for(let i=2; i<=Math.sqrt(n) ; i++){
        if(n % i === 0){
            return false;
        }
        return true;
    }
}

let result = isprime(n);
console.log(result);
