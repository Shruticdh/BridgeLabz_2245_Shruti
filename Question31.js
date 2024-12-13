// 31. Create a function that will return the number of words in a text

 let str ="my name is Shruti";

function  numtext(str){
    let str2 = str.split(" ");
    return str2.length;
  }
let result = numtext(str)  
console.log(result);