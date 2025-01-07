//Valid Anagram
//Given two strings, determine if one is an anagram of the other.
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');

    return sortedS === sortedT;
}
const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t)); 
