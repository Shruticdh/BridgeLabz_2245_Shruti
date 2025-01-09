// for garbage collection 

const weakMap = new WeakMap();
let book1 = {Sno : 1 , book : "Untouchable" , author : "Mulk Raj Anand" }

weakMap.set(book1 , 2);
console.log(weakMap.get(book1));
console.log(weakMap.has(book1));

book1= null; 
console.log(book1);
