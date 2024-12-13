// 33. Calculate the sum of numbers received in a comma delimited string

let str = "10 , 20 , 30 , 40 ,50";

function sumOfString(str){
    let str2 = str.split(',');
    console.log(str2);
    let numsum = str2.reduce((sum , num) => sum += Number(num) , 0);
    return numsum;
}
let result = sumOfString(str);
console.log(result);