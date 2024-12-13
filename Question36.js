// 36. Create a function that converts a string to an array of characters

let str = "Shruti";
let char_arr = [];
function charArray(str){
    for(let i=0; i<str.length; i++){
        char_arr.push(str[i]);
    }
    return char_arr;
}
let result = charArray(str);
console.log(result);