//Find the Middle Element of a Linked List
//Given a linked list, find the middle element.
class Node{
    constructor(value=0,next=null){
        this.value=value;
        this.next=next;

    }
}
class LinkedList{
    constructor(){
        this.head=null;
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
    middleelement(){
        let slow=this.head;
        let fast=this.head;
        while( fast!==null && fast.next!==null){
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow.value;
    }
    }

const ll=new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
console.log(ll.middleelement());