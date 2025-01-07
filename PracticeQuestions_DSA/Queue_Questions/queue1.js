//Implement a Queue Using Stacks
//Implement a queue using two stacks. The basic operations (enqueue, dequeue, front, empty) should be supported.
class MyQueue {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(x) {
      this.stack1.push(x);
    }
  
    dequeue() {
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      return this.stack2.pop();
    }
  
    front() {
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      return this.stack2[this.stack2.length - 1];
    }
  
    empty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  }
  
  const queue = new MyQueue();
  queue.enqueue(1);
  queue.enqueue(2);
  console.log(queue.front()); 
  queue.dequeue();
  console.log(queue.empty()); 
 
  
  