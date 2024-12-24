// class Queue{
//     constructor(){
//         this.queue = [];
//     }
//     enqueue(element){
//         this.queue.push(element);
//     }
//     print(){
//         console.log(this.queue);
//     }

//     sort(){
//         return this.queue.sort();
//     }

//     reverse(){
//         let arr = [];
//         for(let i=5; i>=0; i--){
//             arr.push(this.queue[i]);
//         }
//         console.log(arr);

//         let arr2 = [...arr,...this.queue.slice(6)];

//         return arr2;
//     }

//     isEmpty(){
//         this.queue.length === 0;
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             console.log("Queue Empty");
//         }

//         return this.queue.shift();
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log("Queue Empty");
//         }

//         return this.queue[0];
//     }

//     size(){
//         return this.queue.length;
//     }
// }

// let qu = new Queue();

// qu.enqueue(1);
// qu.enqueue(2);
// qu.enqueue(3);
// qu.enqueue(4);
// qu.enqueue(5);
// qu.enqueue(6);
// qu.enqueue(7);
// qu.enqueue(9);
// qu.enqueue(8);

// qu.print();
// console.log(qu.sort());
// console.log(qu.reverse());










class Queue {
    constructor() {
        this.items = {};
        this.front = 0; 
        this.rear = 0; 
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    isEmpty() {
        return this.rear === this.front;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue empty");
        }
        const remove = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return remove;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Queue empty");
        }
        return this.items[this.front];
    }

   
    isEmpty() {
        return this.rear === this.front;
    }

    size() {
        return this.rear - this.front;
    }

   
    print() {
           let arr = [];
           for(let i=this.front+5; i>=this.front; i--){
            arr.push(this.items[i]);
           }
           console.log(arr);

           let arr2 = [];
           for(let j=this.front+6; j<=this.rear-1; j++){ 
            arr2.push(this.items[j]);
           }
           console.log(arr2);

           let arr3 = [...arr,...arr2];
           arr3.sort();
           return arr3;
    }
}


let qu = new Queue();

qu.enqueue("shruti");
qu.enqueue("priu");
qu.enqueue("tanya");
qu.enqueue("akshit");
qu.enqueue("lala");
qu.enqueue("uja");
qu.enqueue("puja");
qu.enqueue("sumit");
qu.enqueue("vishu");
qu.enqueue("qwerty");
// qu.enqueue("qwerty2");

console.log(qu.print());

