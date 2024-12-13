// 48. Create a function to return the longest word in a string

let str = "My name is Shruti";

function longeststring(str){
    let str2 = str.split(' ');
    let longest = ' ';

    for (let word of str2){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}
let result = longeststring(str);
console.log(result);