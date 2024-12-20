class Node {
    constructor(value) {
        this.value = value; 
        this.next = null;   
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null; 
        this.size = 0;    
    }

    addAtHead(value) {
        const newNode = new Node(value); 
        newNode.next = this.head;        
        this.head = newNode;             
        this.size++;                     
    }

    addAtTail(value) {
        const newNode = new Node(value); 
        if (!this.head) {               
            this.head = newNode;        
        } else {
            let current = this.head;    
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;     
        }
        this.size++;                   
    }

    deleteAtHead() {
        if (!this.head) return;         
        this.head = this.head.next;    
        this.size--;                    
    }
    
    deleteAtTail() {
        if (!this.head) return;         
        if (!this.head.next) {          
            this.head = null;           
        } else {
            let current = this.head;
            let prev = null;
            while (current.next) {      
                prev = current;
                current = current.next;
            }
            prev.next = null;           
        }
        this.size--;                    
    }
    
    traverseAndPrint() {
        let current = this.head;        
        const result = [];
        while (current) {                
            result.push(current.value);  
            current = current.next;      
        }
        console.log(result.join(" -> ")); 
    }
    
}

const list = new SinglyLinkedList();
list.addAtHead(10);  
list.addAtTail(20);  
list.addAtTail(30);  
list.addAtHead(5);   

console.log("Original List:");
list.traverseAndPrint(); 

list.deleteAtHead();  
console.log("After Deleting Head:");
list.traverseAndPrint(); 

list.deleteAtTail();  
console.log("After Deleting Tail:");
list.traverseAndPrint(); 



