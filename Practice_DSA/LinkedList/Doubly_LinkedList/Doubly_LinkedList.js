class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addAtHead(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    addAtTail(value) {
        const newNode = new Node(value);
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    deleteAtHead() {
        if (!this.head) return;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
    }

    deleteAtTail() {
        if (!this.tail) return;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
    }

    traverseForward() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log("Forward:", result.join(" <-> "));
    }

    traverseBackward() {
        let current = this.tail;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.prev;
        }
        console.log("Backward:", result.join(" <-> "));
    }
}


const list = new DoublyLinkedList();
list.addAtHead(10); 
list.addAtTail(20); 
list.addAtTail(30);
list.addAtHead(5);  

console.log("Initial List:");
list.traverseForward(); 

list.deleteAtHead();     
console.log("After Deleting Head:");
list.traverseForward();  

list.deleteAtTail();    
console.log("After Deleting Tail:");
list.traverseForward();  

console.log("Backward Traversal:");
list.traverseBackward(); 
