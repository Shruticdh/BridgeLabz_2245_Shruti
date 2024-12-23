let arr = [38, 27, 43, 3, 9, 82, 10];

function mergesort(arr){
    if(arr.length <=1){
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    let left = mergesort(arr.slice(0,mid));
    let right = mergesort(arr.slice(mid));

    return merge(left , right);
}

function merge(left,right){
    let newarr = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            newarr.push(left.shift());
        }
        else{
            newarr.push(right.shift());
        }
    }
    return newarr.concat(left,right)
}

let result = mergesort(arr);
console.log(result);

