// Palindrome Linked List
// Given a linked list, check if it is a palindrome.
// Palindrome Linked List
// Given a linked list, check if it is a palindrome.
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
    }
    palindromell(){
        let stack=[];
        let temp=this.head;
        while(temp!==null){
            stack.push(temp.value);
            temp=temp.next;
        }
        temp=this.head;
        while(temp!==null){
            if(stack.pop()!==temp.value){
                return false;
            }
            temp=temp.next;
        }
        return true;
    }
}
const ll=new LinkedList();
ll.head=new Node(1);
ll.head.next=new Node(2);
ll.head.next.next=new Node(1);
console.log(ll.palindromell());
