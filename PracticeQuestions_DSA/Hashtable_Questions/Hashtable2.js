//Find All Duplicates in an Array
//Given an array, find all elements that appear twice.
function findDuplicates(nums) {
    let result = [];
    let hashTable = {};
  
    for (let num of nums) {
      if (hashTable[num]) {
        result.push(num);
      } else {
        hashTable[num] = 1;
      }
    }
  
    return result;
  }
  
  let nums = [1,1,2,3,4,5,6,7,7,8,9,9];
  console.log(findDuplicates(nums));
  