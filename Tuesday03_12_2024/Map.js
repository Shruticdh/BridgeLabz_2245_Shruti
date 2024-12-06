//Map: it stores the data in keyValue pairs.
// map = [["key1", "value1"],["key2","value2"]] deleclaration
let myMap = new Map([["a1","Shruti"],["a2","Akshit"]]);
console.log(myMap);
myMap.set("a2","Shruti");// this will override if key is persent
console.log(myMap);
console.log(myMap.get("a1")); // this print the value of given  
for(let  [key,values] of myMap){
    console.log(`${key},${values}`); // this will print the key value pairs int the map
}   
myMap.forEach((key ,values) => {
    console.log(key , values);
})
myMap.delete("a1"); // This will delete the value of the given key 
console.log(myMap);