// 22. Reverse an array

let arr = [1,2,3,4,5,6];

arr.reverse();
console.log(arr);


//  Second method
let arr3 = [1,2,3,4,5,6];
let arr2 = [];
for(let i=arr3.length-1; i>=0; i--){
    arr2.push(arr3[i]);
}
console.log(arr2);
