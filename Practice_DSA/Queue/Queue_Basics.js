/*
Queue Operations:
Enqueue: New element ko queue ke end mein add karna.
Dequeue: Queue ke front se element ko remove karna.
Peek: Queue ke front element ko dekhna bina usse remove kiye.
isEmpty: Check karna ki queue khaali hai ya nahi.
Size: Queue mein kitne elements hain
*/


class Queue
{
    constructor()
    {
        this.queue=[];
    }
    enqueue(element) 
    {
        this.queue.push(element);  
    }
    dequeue() 
    {
        if(this.isEmpty()) 
        {
            return "Queue is empty";
        }
        return this.queue.shift();
    }

    peek() 
    {
        if(this.isEmpty()) 
        {
            return "Queue is empty";
        }
        return this.queue[0];
    }

    isEmpty() 
    {
        return this.queue.length===0; 
    }

    size() 
    {
        return this.queue.length; 
    }
}


const queue=new Queue();

queue.enqueue(10);  
queue.enqueue(20); 
queue.enqueue(30);  

console.log(queue.peek());   
console.log(queue.size());   
console.log(queue.dequeue()); 
console.log(queue.dequeue()); 

console.log(queue.isEmpty()); 