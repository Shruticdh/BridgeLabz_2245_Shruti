//Top K Frequent Elements
//Given an array, return the k most frequent elements.
function topKFrequent(nums, k) {
    const freqMap = {};
    for (let num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }
    const freqArray = Object.entries(freqMap);
    freqArray.sort((a, b) => b[1] - a[1]);
    return freqArray.slice(0, k).map(item => item[0]);
}
const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log(topKFrequent(nums, k)); 
