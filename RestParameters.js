// Example 1: Collect Arguments in an Array
function showArgs(...args){
    console.log(args);
}

showArgs(1,2,3,4,5,6);

// Example 2: Summing Numbers

function sumAll(...numbers){
    let total = 0;
    for(let i of numbers){
        total += i;
    }
    return total;
}
console.log(sumAll(1,2,3,4,5,6));

// Example 3: Mixing Regular and Rest Parameters

function introduce(name, age, ...hobbies){
    console.log(name , "," , age);
    console.log(hobbies);
}
introduce("Shruti" , 21 , "coding" , "sleeping" , "cooking");