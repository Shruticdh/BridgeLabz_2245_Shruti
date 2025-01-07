//) Find Pair with Given Sum
// Given a sorted array and a sum, find two elements that add up to the sum.
let arr=[2,5,7,8];
let sum=10;
let ans=[];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]===sum){
            ans.push(arr[i]);
            ans.push(arr[j]);
        }

    }
}
console.log(ans);