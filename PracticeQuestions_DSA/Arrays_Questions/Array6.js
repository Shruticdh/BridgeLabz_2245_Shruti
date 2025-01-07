//Product of Array Except Self
// Given an array, return an array such that each element is the product of all elements of the array except the element at the current index.
function productexceptself(arr){
    let n=arr.length;
    let prod=new Array(n).fill(1);
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
        if(i!==j){
            prod[i]*=arr[j];
        }
        }
    }
    return prod;
}
let arr=[1,2,5,7];
let ans=productexceptself(arr);
console.log(ans);