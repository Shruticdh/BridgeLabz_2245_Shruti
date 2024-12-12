// 32. Create a function that will capitalize the first letter of each word in a text

let str ="shruti is good girl";

function toupperfirst(str){
    let str2 = str.split('');
    console.log(str2);
    let str3 = str2.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    return str3.join('');
}
let result = toupperfirst(str);
console.log(result);


