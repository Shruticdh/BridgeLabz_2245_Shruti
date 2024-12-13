let arr = [2,4,6,8,10,3,5,7,9];
// map() - Array ke har element par ek function apply kar ke ek naya array banata hai.
let doubled = arr.map(x => x * 2);
console.log(doubled);  

// filter() - Array ke elements ko filter karta hai based on condition.
let evenNumbers = arr.filter(x => x % 2 === 0);
console.log(evenNumbers); 

// reduce() - Array ke elements ko reduce karta hai ek single value mein (accumulation).
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// reduceRight() - Right se left tak reduce karta hai.
let sumRight = arr.reduceRight((acc, curr) => acc + curr, 0);
console.log(sumRight);

// flat() - Multi-dimensional array ko flatten (single-level) karta hai.
let arr2 = [1, [2, 3], [4, 5]];
let flatArr = arr2.flat();
console.log(flatArr);

// flatMap() - Pehle map karta hai phir flat karta hai result ko.
let flatMapped = arr.flatMap(x => [x, x * 2]);
console.log(flatMapped);

