class Node{
    constructor(value=0,left=null,right=null){
        this.value=value;
        this.left=left;
        this.right=right;
    }
}
class Main{

countnodes(root){
        if(root===null){
            return 0;
        }
        return 1+this.countnodes(root.left)+this.countnodes(root.right);
    }
}
const root=new Node(1);
root.left=new Node(2);
root.right=new Node(3);
root.left.left=new Node(4);
root.left.right=new Node(5);
const mainObj=new Main();
console.log(mainObj.countnodes(root));