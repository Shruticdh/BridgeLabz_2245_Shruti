//Find All Duplicates in an Array
//Given an array, find all elements that appear twice
function findDuplicates(nums) {
    let hashtable = {};  
    let duplicates = [];  

    for (let i = 0; i < nums.length; i++) {
        if (hashtable[nums[i]] === 1) {
            duplicates.push(nums[i]);
        } else {

            hashtable[nums[i]] = (hashtable[nums[i]] || 0) + 1;
        }
    }

    return duplicates;  
}
const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const result = findDuplicates(nums);
console.log(result);  
