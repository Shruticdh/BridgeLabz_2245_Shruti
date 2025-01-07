//Find the Largest Sum Contiguous Subarray
//Given an integer array, find the contiguous subarray that has the largest sum and return that sum.

function maxSubArray(nums) {
    let maxSum = -Infinity;
    let currentSum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      currentSum += nums[i];
  
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
  
      if (currentSum < 0) {
        currentSum = 0;
      }
    }
  
    return maxSum;
  }
  
  let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  console.log(maxSubArray(nums)); // Output: 6
  