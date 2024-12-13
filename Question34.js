// 34. Create a function that returns an array with words inside a text.

let str = "My! name is Shruti";

function sumOfString(str){
    let str2 = str.split(' ');
    // console.log(str2);
    return str2;
}
let result = sumOfString(str);
console.log(result);