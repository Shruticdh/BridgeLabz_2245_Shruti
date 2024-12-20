/*

Priority Queue:
Priority Queue ek special type ka queue hota hai jisme har element ko ek priority value di jaati hai. Yeh queue non-linear structure hai jisme elements ko unki priority ke according store kiya jata hai. Jab hum element ko dequeue karte hain, toh sabse high priority wala element sabse pehle remove hota hai, chahe woh queue ke start mein ho ya end mein.

Priority Queue Operations:
Insert (Enqueue): New element ko queue mein insert karna with its priority.
Remove (Dequeue): Sabse high priority wala element ko remove karna.
Peek: Highest priority wala element dekhna bina usse remove kiye.
isEmpty: Check karna ki queue khaali hai ya nahi.
Size: Queue mein kitne elements hain.
*/

class PriorityQueue 
{
    constructor() 
    {
        this.heap=[];
    }

    
    swap(i,j) 
    {
        const temp=this.heap[i];
        this.heap[i]=this.heap[j];
        this.heap[j]=temp;
    }

    heapifyUp() 
    {
        let index=this.heap.length-1;
        while(index>0) 
        {
            let parentIndex=Math.floor((index-1)/2);
            if(this.heap[parentIndex].priority>=this.heap[index].priority) 
            {
                break;
            }
            this.swap(parentIndex,index);
            index=parentIndex;
        }
    }
    heapifyDown() 
    {
        let index=0;
        const size=this.heap.length;
        while(index<size) 
        {
            let leftChild=2*index+1;
            let rightChild=2*index+2;
            let largest=index;

            if (leftChild<size&&this.heap[leftChild].priority>this.heap[largest].priority) 
            {
                largest = leftChild;
            }

            if (rightChild<size&&this.heap[rightChild].priority>this.heap[largest].priority) 
            {
                largest=rightChild;
            }

            if (largest===index) 
            {
                break;
            }
            this.swap(index,largest);
            index=largest;
        }
    }

   
    enqueue(element,priority) 
    {
        const newElement={ element,priority};
        this.heap.push(newElement);
        this.heapifyUp(); 
    }

   
    dequeue() 
    {
        if(this.isEmpty()) 
        {
            console.log("Queue is Empty!");
            return;
        }

        const maxPriorityElement=this.heap[0];
        const lastElement=this.heap.pop();
        
        if (this.heap.length>0) {
            this.heap[0]=lastElement;
            this.heapifyDown();
        }

        return maxPriorityElement.element;
    }
    peek() 
    {
        if (this.isEmpty()) 
        {
            console.log("Queue is Empty!");
            return;
        }
        return this.heap[0].element;
    }

    isEmpty() 
    {
        return this.heap.length===0;
    }

   
    size() 
    {
        return this.heap.length;
    }
}


const pq=new PriorityQueue();


pq.enqueue("Task 1",3);  
pq.enqueue("Task 2",1);  
pq.enqueue("Task 3",4);  
pq.enqueue("Task 4",2);  
console.log(pq.peek()); 

console.log(pq.dequeue()); 
console.log(pq.dequeue()); 

console.log(pq.size());  
console.log(pq.isEmpty()); 
