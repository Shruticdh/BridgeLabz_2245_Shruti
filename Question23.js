// 23. Reverse a string
let s = "shruti";
let empty_s = ' ';
for(let i=s.length-1; i>=0; i--){
    empty_s += s[i];
}
console.log(empty_s);

// second method

let str = s.split('').reverse().join('');
console.log(str);