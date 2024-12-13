// 37. Create a function that will convert a string in an array containing the ASCII codes of each character

let str = "Shruti hello";
let char_arr = [];

function asciiArray(str){
    for(let i=0; i<str.length; i++){
        let str3 = str.charCodeAt(i);
        char_arr.push(str3);
        // char_arr.push(str.charCodeAt(i));
    }
    return char_arr;
}

let result = asciiArray(str);
console.log(result);

// Second method

function asciiArray2(str){
    let str2 = str.split(',').map((text) => text.charCodeAt(0));
}
let result2 = asciiArray2(str);
console.log(result);
