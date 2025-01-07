// Queue Reversal
//Given a queue, reverse its elements using a stack.
class QueueReversal {
    constructor() {
      this.queue = [];
      this.stack = [];
    }
  
    enqueue(x) {
      this.queue.push(x);
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    reverseQueue() {
      while (this.queue.length > 0) {
        this.stack.push(this.dequeue());
      }
      while (this.stack.length > 0) {
        this.enqueue(this.stack.pop());
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
  console.log(q.getQueue());
  q.reverseQueue();
  console.log(q.getQueue());
  