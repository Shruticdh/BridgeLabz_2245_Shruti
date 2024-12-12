// Rotate an array to the right 1 position
let arr = [22,5,633,54,76,89,87];

function rightRotation(arr){
    let last = arr.pop()
    console.log(last);

    arr.unshift(last);
    // console.log(arr);
    return arr;
}
let result = rightRotation(arr);
console.log(result);
