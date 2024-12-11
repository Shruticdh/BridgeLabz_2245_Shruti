const arr =[1,2,3,4,5,6,7,8,9,10];
let i=0;
while(i<arr.length){
    console.log(arr[i]);
    i++;
}
let j=0;
do{
    console.log(arr[j]);
    j++;
}while(j<arr.length);

for (const arrn of arr){
    console.log(arrn);
}

for (const arrnm in arr){
    console.log(arr[arrnm]);
}




arr.forEach((arr2) =>
console.log(arr2)
) 

let m = arr.map((num) => num * 7);
console.log(m);

let f = arr.filter((num2) => num2 > 2);
console.log(f);

let s = arr.reduce((acc , num3) => acc + num3 , 0);
console.log(s);

const arr3 = ["Shruti" , 2 , 0 , null , undefined , [1,2,3,4] , {name : "akshit"}];
// let  arr3;
let b = arr3.map(Boolean);
console.log(b);