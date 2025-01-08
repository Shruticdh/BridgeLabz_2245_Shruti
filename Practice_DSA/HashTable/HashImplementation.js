class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    // way to convert string key to numeric index
    hash(key){
        let total = 0;
        for(let i=0;i<=key.length;i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    // way to set a key value pairs in table 
    set(key , value){
        const index = this.hash(key);
        this.table[index] = value;
    }
    // way to give value for particular key
    get(key){
        const index = this.hash(key);   
        return this.table[index];
    }
    // way to remove valus for given key
    remove(key){
        const index = this.hash(key);
        this.table[index] = undefiend;
    }
    // way to dispaly key vaue pairs
    display(){
        for(let i=0; i<=this.table.length; i++){
            if(this.table[i]){
                console.log(i , this.table[i]);
            }
        }
    }
}

const table = new HashTable(50);
table.set("name" , "Bruce");
table.set("age" , "25");
table.display();