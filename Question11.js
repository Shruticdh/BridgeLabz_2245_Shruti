// 11. Calculate the average of the numbers in an array of numbers
let arr = [22,3,44,56,76,78];
let result = arr.reduce((sum , num) => sum += num , 0);
console.log(result);
function tocalAverage(arr , result){
    if(arr.length === 0){return 0;}
    let average = result/arr.length;
    return average;
}
let average2 = tocalAverage(arr , result);
console.log(average2);

