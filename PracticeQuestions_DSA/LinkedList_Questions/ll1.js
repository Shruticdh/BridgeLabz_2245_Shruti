class Node {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }

    reversell() {
        let temp = this.head;
        const stack = [];
        while (temp !== null) {
            stack.push(temp.value);
            temp = temp.next;
        }
        temp = this.head;
        while (temp !== null) {
            temp.value = stack.pop();
            temp = temp.next;
        }
    }

    printll() {
        let temp = this.head;
        const result = [];
        while (temp !== null) {
            result.push(temp.value);
            temp = temp.next;
        }
        console.log(result.join(" -> "));
    }
}

const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.printll();
ll.reversell();
ll.printll();
