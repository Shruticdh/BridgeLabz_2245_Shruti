//Remove N-th Node from End of List
//Given a linked list and an integer n, remove the n-th node from the end of the list.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    removenthNode(head, n) {
        let slow = head;
        let fast = head;

        for (let i = 0; i < n; i++) {
            if (fast === null) {
                throw new Error("n is greater than the length of the list");
            }
            fast = fast.next;
        }

        if (fast === null) {
            return head.next;
        }

        while (fast.next !== null) {
            slow = slow.next;
            fast = fast.next;
        }

        slow.next = slow.next.next;
        return head;
    }

    printlist(head) {
        let temp = head;
        while (temp !== null) {
            process.stdout.write(temp.value + " -> ");
            temp = temp.next;
        }
        console.log("null");
    }
}

const ll = new LinkedList();
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Original List:");
ll.printlist(head);

const ans = ll.removenthNode(head, 2);

console.log("List After Removing 2nd Node from End:");
ll.printlist(ans);
