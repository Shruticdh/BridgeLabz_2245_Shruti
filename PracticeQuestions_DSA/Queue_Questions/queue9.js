//Reverse First K Elements of a Queue
//Given a queue and an integer k, reverse the first k elements of the queue

class QueueReversal {
    constructor() {
      this.queue = [];
    }
  
    enqueue(x) {
      this.queue.push(x);
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    reverseFirstK(k) {
      if (k <= 0 || k > this.queue.length) {
        return;
      }
  
      let stack = [];
      for (let i = 0; i < k; i++) {
        stack.push(this.dequeue());
      }
  
      while (stack.length > 0) {
        this.enqueue(stack.pop());
      }
  
      let remainingSize = this.queue.length - k;
      for (let i = 0; i < remainingSize; i++) {
        this.enqueue(this.dequeue());
      }
    }
  
    getQueue() {
      return this.queue;
    }
  }
  
  const q = new QueueReversal();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  q.enqueue(5);
  console.log( q.getQueue());
  q.reverseFirstK(3);
  console.log(q.getQueue());
  