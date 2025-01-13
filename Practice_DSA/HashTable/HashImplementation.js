// class HashTable2{
//     constructor(size){
//         this.table = new Array(size);
//         this.size = size;
//     }
//     // way to convert string key to numeric index
//     hash(key){
//         let total = 0;
//         for(let i=0;i<=key.length;i++){
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }
//     // way to set a key value pairs in table 
//     set(key , value){
//         const index = this.hash(key);
//         this.table[index] = value;
//     }
//     // way to give value for particular key
//     get(key){
//         const index = this.hash(key);   
//         return this.table[index];
//     }
//     // way to remove valus for given key
//     remove(key){
//         const index = this.hash(key);
//         this.table[index] = undefiend;
//     }
//     // way to dispaly key vaue pairs
//     display(){
//         for(let i=0; i<=this.table.length; i++){
//             if(this.table[i]){
//                 console.log(i , this.table[i]);
//             }
//         }
//     }
// }

// const table = new HashTable2(50);
// table.set("name" , "Bruce");
// table.set("age" , "25");
// table.display();



class HashTable {
    constructor(size) {
        this.buckets = new Array(size);
        this.size = size;
    }

    // Hash function
    _hash(key) {
        let hash = 0;
        for (let char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }

    // Insert a key-value pair
    set(key, value) {
        const index = this._hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        this.buckets[index].push([key, value]);
    }

    // Retrieve a value by key
    get(key) {
        const index = this._hash(key);
        if (this.buckets[index]) {
            for (let pair of this.buckets[index]) {
                if (pair[0] === key) {
                    return pair[1];
                }
            }
        }
        return undefined; // Key not found
    }

    // Delete a key-value pair
    delete(key) {
        const index = this._hash(key);
        if (this.buckets[index]) {
            this.buckets[index] = this.buckets[index].filter(pair => pair[0] !== key);
        }
    }
}

// Usage
const ht = new HashTable(5);
ht.set("name", "Alice");
ht.set("age", 25);
console.log(ht.get("name")); // Output: Alice
ht.delete("age");
console.log(ht.get("age")); // Output: undefined
