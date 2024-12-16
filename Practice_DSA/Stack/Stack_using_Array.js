class Stack{
    constructor(){
        this.stack = [];
    }

    push(element){
        this.stack.push(element);
    }
    print(){
        console.log(this.stack);
        console.log(this.stack.join(','));
    }
    isEmpty(){
        return this.stack.length === 0;
    }
    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return null;
        }
        return this.stack.pop();
    }
    
    peek(){
        if(this.isEmpty()){
            console.log("Stack is Empty");
            return null;
        }
        return this.stack[this.stack.length - 1];
    }
    size(){
        return this.stack.length;
    }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
