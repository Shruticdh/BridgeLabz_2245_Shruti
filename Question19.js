// 19. Create a function that will return in an array the first “p” prime numbers greater than “n”

let n = 200;
let p = 20;

function prime(num){
    if(num===0 || num===1){
        return false;
    }
    for(let i=2; i<Math.sqrt(num); i++){
        if(num%i === 0){
            return false;
        }
    }
    return true;
}

function greatestPrime(n , p){
    let count = 0;
    let num = n+1;
    let arr = [];
    for(let i=num; i<500; i++){
        if(count === p){
            console.log(count);
            break;
        }
        if(prime(i)){
            arr.push(i);
            count++;
        }
        // return arr;
    }
    return arr;
}

let result = greatestPrime(n,p);
console.log(result);
