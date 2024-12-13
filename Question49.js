// 49. Shuffle an array of strings

let str = ["apple", "banana", "cherry", "date", "elderberry"];

function shuffle_arr_str(str){
    for (let i = str.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        [str[i], str[random]] = [str[random], str[i]];
    }
    return str;
}
let result = shuffle_arr_str(str);
console.log(result);