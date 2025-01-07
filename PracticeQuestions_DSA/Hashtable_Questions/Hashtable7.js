//First Unique Character in a String
//Given a string, find the first non-repeating character.

function firstUniqChar(s) {
    let hashTable = {};
  
    for (let char of s) {
      hashTable[char] = (hashTable[char] || 0) + 1;
    }
  
    for (let i = 0; i < s.length; i++) {
      if (hashTable[s[i]] === 1) {
        return s[i];
      }
    }
  
    return -1;
  }
  
  let s = "tanya";
  console.log(firstUniqChar(s)); 
  