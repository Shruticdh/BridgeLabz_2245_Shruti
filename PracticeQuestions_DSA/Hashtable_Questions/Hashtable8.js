//Intersection of Two Arrays
//Given two arrays, find their intersection.

function intersection(nums1, nums2) {
    const map = {}; 
    const result = [];

    for (let num of nums1) {
        map[num] = (map[num] || 0) + 1;
    }
    for (let num of nums2) {
        if (map[num] > 0) {
            result.push(num);  
            map[num]--;  
        }
    }

    return result;
}

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersection(nums1, nums2)); 