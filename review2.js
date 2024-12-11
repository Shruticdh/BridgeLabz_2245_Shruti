let arr =[122,44,5,666,334,226,333,97,76,67];
let arr2 = [];
for(let i=4;i>=0;i--){
    arr2.push(arr[i]);
}
console.log(arr2);

for(let i=5;i<=arr.length-1;i++){
    arr2.push(arr[i]);
}
console.log(arr2);


let arr4 = [];
// console.log(arr4);
for(let i=4;i>=0;i--){
    arr4.push(arr[i]);
}
console.log(arr4);
let arr5 = [...arr4 , ...arr.slice(5)];
console.log(arr5);



