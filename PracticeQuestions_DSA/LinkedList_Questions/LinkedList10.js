// 10) Rearrange a Linked List
// Given a linked list, rearrange it in the following order: first element, last element, second element, second last element, and so on.

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function rearrangeLinkedList(head) {
    if (!head || !head.next) return head;
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null, curr = slow, temp;
    while (curr) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    let secondHalf = prev;

    let firstHalf = head;
    while (secondHalf.next) {
        let temp1 = firstHalf.next;
        let temp2 = secondHalf.next;

        firstHalf.next = secondHalf;
        secondHalf.next = temp1;

        firstHalf = temp1;
        secondHalf = temp2;
    }

    return head;
}

function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function printLinkedList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" -> "));
}

let head = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original list:");
printLinkedList(head);
console.log("Rearranged list:");
rearrangeLinkedList(head);
printLinkedList(head);
