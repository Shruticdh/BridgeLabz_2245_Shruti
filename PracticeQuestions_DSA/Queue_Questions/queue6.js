// 6) Implement a Priority Queue
// Implement a priority queue using a heap.

class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }
    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (index < length) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    enqueue(value) {
        this.heap.push(value);
        this.heapifyUp(); 
    }

    dequeue() {
        if (this.isEmpty()) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop(); 

        this.heapifyDown();
        return root;
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

const pq = new PriorityQueue();
pq.enqueue(10);
pq.enqueue(20);
pq.enqueue(5);
pq.enqueue(15);
console.log(pq.peek());
console.log(pq.dequeue());
console.log(pq.peek());
pq.enqueue(3);
console.log(pq.peek());
