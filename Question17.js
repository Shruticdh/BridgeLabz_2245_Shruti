// Calculate the sum of digits of a positive integer number

let n = 123456; //initialization 
let rem = 0;
let sum =0;
function digitsum(n){
    while(n>0){ //condition
    rem = (n%10);
    sum += rem;
    n = Math.floor(n/10); // increment
    }
    return sum;
}

let result = digitsum(n);
console.log(result);

