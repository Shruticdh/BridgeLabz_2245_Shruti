/*

. Double-Ended Queue (Deque):
Deque (Double-Ended Queue) ek aisa queue hai jisme aap both ends (front aur rear) 
se elements ko insert aur remove kar sakte ho. Yeh queue linear data structure ka ek extension hai.

Operations:
Add at Front: Element ko front mein add karna.
Add at Rear: Element ko rear mein add karna.
Remove from Front: Element ko front se remove karna.
Remove from Rear: Element ko rear se remove karna.
Peek Front/Rear: Front ya rear element ko dekhna bina remove kiye.

*/


class Deque 
{
    constructor() 
    {
        this.items=[];
    }

    addFront(element) 
    {
        this.items.unshift(element); 
    }

    addRear(element) 
    {
        this.items.push(element);
    }

    removeFront() 
    {
        if(this.isEmpty()) 
        {
            console.log("Deque is Empty!");
            return;
        }
        return this.items.shift();
    }

    removeRear() {
        if(this.isEmpty()) 
        {
            console.log("Deque is Empty!");
            return;
        }
        return this.items.pop();
    }

    peekFront() 
    {
        if(this.isEmpty()) 
        {
            console.log("Deque is Empty!");
            return;
        }
        return this.items[0]; 
    }

    peekRear() 
    {
        if(this.isEmpty()) 
        {
            console.log("Deque is Empty!");
            return;
        }
        return this.items[this.items.length-1];
    }

    isEmpty() 
    {
        return this.items.length===0;
    }

    size() 
    {
        return this.items.length;
    }
}


const deque = new Deque();


deque.addFront(10); 
deque.addRear(20);  
deque.addFront(5); 
console.log(deque.peekFront()); 
console.log(deque.peekRear());  

deque.removeFront();
deque.removeRear();

console.log(deque.size()); 
console.log(deque.isEmpty()); 
