//Subarray with Given Sum
//Given an array and a target sum, find the continuous subarray whose sum equals the given target.
let arr=[1,7,6,8,2,3];
let target=15;
let ans=[];
for(let i=0;i<arr.length;i++){
    let sum=0;
    for(let j=0;j<arr.length;j++){
        sum+=arr[j];
       if(sum===target){
        ans.push(arr[i]);
        ans.push(arr[j]);;
       }
    }
}
