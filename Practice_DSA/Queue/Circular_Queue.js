/*
1. Circular Queue:
Circular Queue ek aisi queue hoti hai jisme end ko start ke saath jod diya jata hai, 
yani jab queue full ho jati hai, to naye elements ko queue ke start mein add kiya ja sakta hai.
Yeh queue fixed size ki hoti hai, lekin elements ko efficiently reuse kiya ja sakta hai.
*/

class CircularQueue 
{
    constructor(size) 
    {
        this.queue=new Array(size);
        this.front=-1;
        this.rear=-1;
        this.size=size;
    }

    
    enqueue(element) 
    {
        if((this.rear+1)%this.size===this.front) 
        {
            console.log("Queue is Full!");
            return;
        }

        if(this.front===-1) 
        {  
            this.front=0;
        }

        this.rear=(this.rear+1)%this.size; 
        this.queue[this.rear]=element;
    }

    
    dequeue() 
    {
        if(this.front===-1)
        {
            console.log("Queue is Empty!");
            return;
        }

        const removedElement=this.queue[this.front];
        if (this.front===this.rear) 
        {
            this.front=-1;
            this.rear=-1;
        } 
        else 
        {
            this.front=(this.front+1)%this.size;
        }

        return removedElement;
    }


    peek() 
    {
        if(this.front===-1) {
            console.log("Queue is Empty!");
            return;
        }
        return this.queue[this.front];
    }

    
    isEmpty() 
    {
        return this.front===-1;
    }

    
    sizeQueue() 
    {
        if(this.front===-1) 
        {
            return 0;
        }
        return (this.rear-this.front+1+this.size)%this.size;
    }
}

const queue=new CircularQueue(5);


queue.enqueue(10);  
queue.enqueue(20);  
queue.enqueue(30);  
queue.enqueue(40);  
queue.enqueue(50);  
console.log(queue.peek());   
queue.enqueue(60); 

console.log(queue.dequeue()); 

console.log(queue.sizeQueue());

console.log(queue.isEmpty()); 
