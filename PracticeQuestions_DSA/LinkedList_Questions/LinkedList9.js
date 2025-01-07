// Flatten a Multilevel Doubly Linked List
// Flatten a multilevel doubly linked list to a single level doubly linked list.


class Node {
    constructor(val, prev = null, next = null, child = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
        this.child = child;
    }
}

function flatten(head) {
    if (!head) return null;

    let current = head;
    while (current) {
        if (!current.child) {
            current = current.next;
            continue;
        }

        let child = current.child;
        let next = current.next;
        let childTail = child;
        while (childTail.next) {
            childTail = childTail.next;
        }

        current.child = null;
        current.next = child;
        child.prev = current;

        if (next) {
            childTail.next = next;
            next.prev = childTail;
        }
        current = current.next;
    }
    return head;
}

function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" <-> "));
}

let head = new Node(1);
head.next = new Node(2, head);
head.next.next = new Node(3, head.next);
head.next.child = new Node(4);
head.next.child.next = new Node(5, head.next.child);
console.log("Flattened list:");
flatten(head);
printList(head);
