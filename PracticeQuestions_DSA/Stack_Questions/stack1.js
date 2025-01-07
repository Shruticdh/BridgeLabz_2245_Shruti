//Implement a Stack Using Queues
//Implement a stack using two queues. The basic operations (push, pop, top, empty) should be supported.
class StackUsingQueues{
    constructor(){
        this.queue1=[];
        this.queue2=[];
    }
    push(x){
        this.queue1.push(x);
    }
    pop(){
        if(this.empty()){
            throw new Error("stack is empty");
        }
        while(this.queue1.length>1){
            this.queue2.push(this.queue1.shift());
        }
        //hum ek element jisko pop krna h usko chodke baki sb shift krdenge
        const popped=this.queue1.shift();
        //ye bacha hua element nikal denge
        [this.queue1,this.queue2]=[this.queue2,this.queue1];
        //queue2 se queue1 m shift krdenege elements
        return popped;
    }
    top(){
        if(this.empty()){
            throw new Error("stack is empty");
        }
        while(this.queue1.length>1){
            this.queue2.push(this.queue1.shift());
        }
        const topElement = this.queue1[0];
        this.queue2.push(this.queue1.shift());
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
        return topElement;
    }
    empty(){
        return this.queue1.length===0;
    }
}
const stack=new StackUsingQueues();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.top());
console.log(stack.pop());
console.log(stack.top());
