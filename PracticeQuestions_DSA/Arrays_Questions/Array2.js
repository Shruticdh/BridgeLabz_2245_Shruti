//MOVE ZEROES
//Given an array, move all zeros to the end of the array while maintaining the relative order of the non-zero elements.
let arr=[1,0,1,0,0,0,1];
let count1=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
        count1++;
    }
}
let temp=[];
for(let i=0;i<count1;i++){
    temp[i]=1;
}
for(let i=count1;i<arr.length;i++){
    temp[i]=0;
}
for(let i=0;i<arr.length;i++){
    console.log(temp);
}