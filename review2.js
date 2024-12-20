class Stack{
    constructor(){
        this.stack = [];
    }
    push(element){
        this.stack.push(element);
        return null;
    }

    print(){
        console.log(this.stack);
        return null;
    }

    isEmpty(){
        return this.stack.length === 0;
    }
    
    get_min(){
        let min = Math.min(...this.stack);
        return min;
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack is Empty");
            return null;
        }
        this.push.pop;
        return null;
    }

    get_max(){
        let max = Math.max(...this.stack);
        return max;
    }
}
let stack = new Stack();
console.log(`[${stack.push(14)}, ${stack.push(12)}, ${stack.get_min()}, ${stack.push(9)}, ${stack.push(17)} ${stack.pop()}, ${stack.get_max()}]`);


// Second Question 

let arr = [1,4,7,5,1,4,2,3,4,9];

let count = {};
arr.forEach(num =>{
    count[num] = (count[num] || 0) + 1;
})
// console.log(count);

let repeated = [];
for (let num in count) {
    if (count[num] > 1) {
        repeated.push({ element: num, count: count[num] });
    }
}

console.log(repeated);

let max = Math.max(...arr);
console.log(max);


let missing = [];
for (let i = 1; i <= max; i++) {
    if (!(i in count)) {
        missing.push(i);
    }
}
console.log(missing);

