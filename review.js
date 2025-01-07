let arr=[22,56,67,78,34,76,87,12,23,89];
function mergesort(arr){
    if(arr.length <=1){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let l = mergesort(arr.slice(0,mid));
    let r = mergesort(arr.slice(mid));

    return merge(l,r);
}

function merge(l,r){
    let newarr = [];
    while(l.length && r.length){
        if(l[0] < r[0]){
            newarr.push(l.shift());
        }
        else{
            newarr.push(r.shift());
        }
    }
    return newarr.concat(l,r);
}
let sortarr = mergesort(arr);
console.log(sortarr);


let max = 3;
function findmax(sortarr , max){
    if(max){
        console.log(sortarr[sortarr.length - max]);
    }
}
findmax(sortarr, max);











