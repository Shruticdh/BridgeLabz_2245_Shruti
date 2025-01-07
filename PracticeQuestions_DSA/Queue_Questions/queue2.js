// 2) Circular Queue
// Implement a circular queue where the enqueue and dequeue operations are performed in constant time.

class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.queue = new Array(capacity);
        this.front = -1;
        this.rear = -1;
        this.size = 0;   
    }

    enqueue(value) {
        if (this.isFull()) {
            console.log("Queue is full!");
            return;
        }
        if (this.isEmpty()) {
            this.front = 0;
        }
        this.rear = (this.rear + 1) % this.capacity;
        this.queue[this.rear] = value;
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return;
        }

        const dequeuedValue = this.queue[this.front];
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.capacity;
        }

        this.size--;
        return dequeuedValue;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return;
        }
        return this.queue[this.front];
    }

    isFull() {
        return this.size === this.capacity;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    printQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return;
        }

        let elements = [];
        let i = this.front;
        while (i !== this.rear) {
            elements.push(this.queue[i]);
            i = (i + 1) % this.capacity;
        }
        elements.push(this.queue[this.rear]);
        console.log(elements.join(", "));
    }
}

const queue = new CircularQueue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.printQueue();
queue.dequeue();
queue.printQueue();
queue.enqueue(60);
queue.printQueue();
queue.dequeue(); 
queue.printQueue();  
