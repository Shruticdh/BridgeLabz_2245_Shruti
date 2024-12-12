// Calculate the sum of even numbers greater than 10 and less than 30
let sum = 0;
let number = 30;
for(let i=11; i<number; i++){
    if(i%2 === 0){
        sum += i;
    }
}
console.log(sum);