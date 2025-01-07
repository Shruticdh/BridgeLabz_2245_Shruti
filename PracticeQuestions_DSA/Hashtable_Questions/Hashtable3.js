//Longest Substring Without Repeating Characters
//Given a string, find the length of the longest substring without repeating characters.
function longestSubstringWithoutRepeatingChars(s) {
    let map = {}; 
    let maxLength = 0;  
    let left = 0;  

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        if (map[currentChar] >= left) {
            left = map[currentChar] + 1;
        }
        map[currentChar] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
const s = "abcabcbb";
const result = longestSubstringWithoutRepeatingChars(s);
console.log(result);  
