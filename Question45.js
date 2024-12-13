//45. Create a function to calculate the sum of all the numbers in a jagged array


let arr=[1,2,3,4,5,6,7,8];
let sum=0;

function jaggedarray(arr , sum){
    
    for(let element of arr){
        if(Array.isArray(element)){
            sum += jaggedarray(element)
        }
        else if(typeof element === "number"){
            sum += element
        }
    }
    return sum;
}
let result = jaggedarray(arr , sum );
console.log(result);