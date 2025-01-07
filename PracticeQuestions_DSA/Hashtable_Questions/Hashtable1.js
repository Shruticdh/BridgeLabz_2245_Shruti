//Two Sum
//Given an array of integers and a target, return the indices of the two numbers that add up to the target.

function twoSum(nums, target) {
    let hashTable = {};
    
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      
      if (hashTable[complement] !== undefined) {
        return [hashTable[complement], i];
      }
      
      hashTable[nums[i]] = i;
    }
    
    return [];
  }
  
  let nums = [4,8,35,10];
  let target =18 ;
  console.log(twoSum(nums, target)); 
  