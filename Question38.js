// 38. Create a function that will convert an array containing ASCII codes in a string
 let arr = [83, 104, 114, 117,116, 105,  32, 104,101, 108, 108, 111]; 

 function charArray(arr){
    let str = arr.map(text => String.fromCharCode(text)).join('');
    let str2 = arr.reduce((text2, code) => text2 + String.fromCharCode(code), '');
    console.log(str2);
    return str;
 }

let result = charArray(arr);
console.log(result);