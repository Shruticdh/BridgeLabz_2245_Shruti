class Stack{
    constructor(){
        this.stack = {};
        this.count = 0;
    }

    push(elements){
        this.stack[this.count] = elements;
        this.count++;
    }
    print(){
        let elements = [];
        for(let i=0; i<this.count; i++){
            elements.push(this.stack[i]);
        }
        console.log(elements);
        console.log(elements.join(','));
    }

    isEmpty(){
        return this.count === 0;
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack is Empty");
        }
        this.count--;
        let topElement = this.stack[this.count];
        delete this.stack[this.count];
        return topElement;
    }

    peek(){
        if(this.isEmpty()){
            console.log("Stack is Empty");
        }
        return this.stack[this.count - 1];
    }

    size(){
        return this.count;
    }
}

let stack = new Stack();
stack.push("A"); stack.push("B"); stack.push("C");
stack.print()
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());

