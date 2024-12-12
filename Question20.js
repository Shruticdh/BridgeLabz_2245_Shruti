// 20. Rotate an array to the left 1 position
let arr = [1,2,3,4,5,6,7];
function rotateArray(arr){
    let firstElement = arr.shift();
    console.log(firstElement);

    arr.push(firstElement);
    return arr;
}
let result = rotateArray(arr);
console.log(result);