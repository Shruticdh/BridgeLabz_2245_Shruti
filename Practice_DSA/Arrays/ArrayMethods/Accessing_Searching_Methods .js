let arr = [2,4,6,7,8,3,9,1,5,3];

// indexOf() - First occurrence ka index return karta hai kisi element ka.
let index = arr.indexOf(9);
console.log("indexof - " + index);

// lastIndexOf() - Last occurrence ka index return karta hai kisi element ka.
let lastindex = arr.lastIndexOf(3);
console.log("lastIndexof - " + lastindex);

// includes() - Check karta hai agar array mein kisi element ka existence hai.
let exists = arr.includes(2);
console.log("includes - " + exists);

// find() - Pehla element return karta hai jo provided function se match kare.
let found = arr.find(x => x > 2);  // Finds first element greater than 2
console.log("find() - " + found); 

// findIndex() - Pehla index return karta hai jo provided function se match kare.
let index2 = arr.findIndex(x => x > 2);
console.log("findIndex() - " + index2); 

// some() - Agar array ke kisi element ne condition ko satisfy kiya ho to true return karta hai.
let hasEven = arr.some(x => x % 2 === 0);
console.log("some - " + hasEven); 

// every() - Agar sabhi elements ne condition ko satisfy kiya ho to true return karta hai.
let allEven = arr.every(x => x % 2 === 0);
console.log("every - " + allEven);

// at() - Array ke given index ka element return karta hai, negative index bhi support karta hai.
let element = arr.at(-1);  // Last element
console.log("at - " + element); 

// includes() - Check karta hai agar kisi specific element ka array mein hona.