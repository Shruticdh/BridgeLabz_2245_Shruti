//Subarray Sum Equals K
//Given an array and a target sum k, find the number of subarrays that sum up to k.

function subarraySum(nums, k) {
    let count = 0;
    let sum = 0;
    let hashTable = {0: 1};
  
    for (let num of nums) {
      sum += num;
  
      if (hashTable[sum - k]) {
        count += hashTable[sum - k];
      }
  
      hashTable[sum] = (hashTable[sum] || 0) + 1;
    }
  
    return count;
  }
  
  let nums = [1, 2, 3];
  let k = 3;
  console.log(subarraySum(nums, k)); 
  