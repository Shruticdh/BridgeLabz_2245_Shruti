// 44. Create a function that will convert a string containing a binary number into a number

let str = "110110110";

function constrNumber(str){
    let num = parseInt(str , 3);
    return num;
} 

let result = constrNumber(str);
console.log(result);