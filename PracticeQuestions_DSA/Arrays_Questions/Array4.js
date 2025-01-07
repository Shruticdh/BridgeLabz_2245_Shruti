    //Rotate an Array
    //Given an array and a number k, rotate the array to the right by k steps.
    
    let arr=[1,2,5,7,8,6];
    let k=2;
    let n=arr.length;
    
    function swapnumbers(){
        let start=0;
        let end=arr.length-1;
        while(start<end){
            let temp=arr[start];
            arr[start]=arr[end];
            arr[end]=temp;
            start++;
            end--;
        }
        
    }
    function rotateelementsbykposition(arr,n,k){
        k=k%n;
        if(k===0){
            return;
        }
        swapnumbers(arr,0,n-k-1);
        swapnumbers(arr,n-k,n-1);
        swapnumbers(arr,0,n-1);
    }
    rotateelementsbykposition(arr,n,k);
    console.log(arr);