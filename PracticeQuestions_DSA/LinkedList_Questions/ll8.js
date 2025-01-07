//Intersection of Two Linked Lists
//Given two singly linked lists, determine if they intersect and find the intersecting node.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    Intersection(headA, headB) {
        if (headA === null || headB === null) {
            return null;
        }

        let temp1 = headA;
        let temp2 = headB;

        while (temp1 !== temp2) {
            temp1 = temp1 ? temp1.next : headB; 
            temp2 = temp2 ? temp2.next : headA; 
        }

        return temp1;
    }
}

const ll = new LinkedList();

const headA = new Node(1);
headA.next = new Node(2);
headA.next.next = new Node(3);

const headB = new Node(4);
headB.next = new Node(5);
headB.next.next = headA.next.next; 

const intersection = ll.Intersection(headA, headB);

if (intersection) {
    console.log(`Intersection Node Value: ${intersection.value}`);
} else {
    console.log("No intersection");
}
