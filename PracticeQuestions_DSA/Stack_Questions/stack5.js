//Min Stack
//Implement a stack that supports push, pop, top, and retrieving the minimum element in constant time.
class MinStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(x) {
      this.stack.push(x);
      if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x);
      }
    }
  
    pop() {
      const popped = this.stack.pop();
      if (popped === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
    }
  
    top() {
      return this.stack[this.stack.length - 1];
    }
  
    getMin() {
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  
  const minStack = new MinStack();
  minStack.push(1);
  minStack.push(2);
  minStack.push(3);
  console.log(minStack.getMin()); 
  minStack.pop();
  console.log(minStack.getMin()); 
  minStack.pop();
  console.log(minStack.getMin()); 
  
