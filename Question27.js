// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

let arr = [1,2,3,4,5,6,6,7,4,8,9,8,3];

function distinctelements(arr){
    let set = new Set();
    for(let i=1; i<=arr.length-1; i++){
        set.add(arr[i]);
    }
    return set;
}
let result = distinctelements(arr);
console.log(result);

// Second method 
function distinctelements2(arr){
    let arr2 = [];
    for(let i=1; i<arr.length; i++){
        if(!arr2.includes(arr[i])){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
let result2 = distinctelements2(arr);
console.log(result2);



