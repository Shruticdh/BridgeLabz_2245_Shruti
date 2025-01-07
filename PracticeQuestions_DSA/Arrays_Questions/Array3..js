//Find Duplicate Elements
// Given an array of integers, find the elements that appear more than once.
let arr=[1,2,1,3,4];
let ans=[];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j] && !ans.includes(arr[i]) ){
      ans.push(arr[i]);
        }
    }
}
console.log(ans);