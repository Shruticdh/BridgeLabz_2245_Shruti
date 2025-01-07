// 9) Find the Contiguous Subarray with the Largest Product
// Given an integer array, find the contiguous subarray which has the largest product.


let nums = [2, 3, -2, 4, -1];
function maxProduct(nums) {
    if (!nums || nums.length === 0) return 0;

    let maxProduct = nums[0];
    let currentMax = nums[0];
    let currentMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        if (num < 0) {
            [currentMax, currentMin] = [currentMin, currentMax];
        }

        // Update currentMax and currentMin
        currentMax = Math.max(num, currentMax * num);
        currentMin = Math.min(num, currentMin * num);

        // Update maxProduct with the largest product so far
        maxProduct = Math.max(maxProduct, currentMax);
    }

    return maxProduct;
}

console.log(maxProduct(nums));
