let arr = [2,4,6,7,8,3,9,1,5];

// push() - Array ke end mein ek ya zyada elements add karta hai.
arr.push(4 ,5);
console.log("push - " + arr);

// pop() - Array ke end se last element ko remove karta hai.
let num = arr.pop();
console.log("pop - " + num);
console.log("pop - " + arr);

// shift() - Array ke beginning se first element ko remove karta hai.
arr.shift();
console.log("shift - " + arr);

// unshift() - Array ke beginning mein ek ya zyada elements add karta hai.
arr.unshift(1);
console.log("unshift - " + arr);

// splice() - Specific index par elements ko remove ya replace karta hai.
arr.splice(3,4,5,6);
console.log("splice - " + arr);

// sort() - Array ke elements ko sort karta hai (default, lexicographically).
arr.sort();
console.log("sort - " + arr);

// copyWithin() - Array ke part ko kisi aur position par copy karta hai.
arr.copyWithin(0,3,5);// Copies elements from index 3 to 5 to index 0
console.log("copyWithin - " + arr);

// reverse() - Array ke elements ki order ko reverse karta hai.
arr.reverse();
console.log("reverse - " + arr);

// fill() - Array ke sabhi elements ko ek specific value se replace karta hai.
arr.fill(3)
console.log("fill - " + arr);
