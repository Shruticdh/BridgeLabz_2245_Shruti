//Sliding Window Maximum
//Given an array and a sliding window of size k, find the maximum for each sliding window.
function maxSlidingWindow(nums, k) {
    let result = [];
    
    for (let i = 0; i <= nums.length - k; i++) {
      let window = nums.slice(i, i + k);
      let max = Math.max(...window);
      result.push(max);
    }
  
    return result;
  }
  
  let nums = [1, 3, -1, -3, 5, 3, 6, 7];
  let k = 3;
  console.log(maxSlidingWindow(nums, k));
  
