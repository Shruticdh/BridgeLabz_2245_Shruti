//51. Find the frequency of letters inside a string.
//  Return the result as an array of arrays. Each subarray has 2 elements: letter and number of occurrences.

function letterFrequency(str){
    let freqMap={};
    for(let char of str){
        if(char!==' '){ 
            freqMap[char]=(freqMap[char]||0)+1;
        }
    }
    let result=[];
    for(let [letter,count] of Object.entries(freqMap)){
        result.push([letter,count]);
    }
    return result;
}

console.log(letterFrequency("hello world"));