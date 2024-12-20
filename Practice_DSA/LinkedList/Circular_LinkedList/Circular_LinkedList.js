class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addAtHead(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            newNode.next = this.head;
            current.next = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    addAtTail(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
        this.size++;
    }

    deleteAtHead() {
        if (!this.head) return;
        if (this.head.next === this.head) {
            this.head = null;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = this.head.next;
            this.head = this.head.next;
        }
        this.size--;
    }

    deleteAtTail() {
        if (!this.head) return;
        if (this.head.next === this.head) {
            this.head = null;
        } else {
            let current = this.head;
            while (current.next.next !== this.head) {
                current = current.next;
            }
            current.next = this.head;
        }
        this.size--;
    }

    traverse() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let current = this.head;
        const result = [];
        do {
            result.push(current.value);
            current = current.next;
        } while (current !== this.head);
        console.log("Circular List:", result.join(" -> "));
    }
}

const list = new CircularLinkedList();
list.addAtHead(10); 
list.addAtTail(20); 
list.addAtTail(30); 

console.log("Initial List:");
list.traverse(); 

list.deleteAtHead(); 
console.log("After Deleting Head:");
list.traverse();

list.deleteAtTail();
console.log("After Deleting Tail:");
list.traverse(); 
