//Implement a Stack with Push and Pop Operations in Constant Time
//Design a stack that supports constant time operations for push, pop, top, and getMin.


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
  minStack.push(5);
  minStack.push(3);
  minStack.push(7);
  console.log(minStack.getMin());
  minStack.pop();
  console.log(minStack.getMin()); 
  minStack.pop();
  console.log(minStack.getMin()); 
  