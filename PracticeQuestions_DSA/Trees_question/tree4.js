// Path Sum
// Given a binary tree and a sum, check if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
class Node{
    constructor(value=0,left=null,right=null){
        this.value=value;
        this.left=left;
        this.right=right;
    }
}
class Main{
    PathSum(root,target){
        if(root===null){
            return false;
        }
        if(root.left===null && root.right===null && root.value===target){
            return true;
        }
        return this.PathSum(root.left,target-root.value) || this.PathSum(root.right,target-root.value);
    }
}
const root=new Node(1);
root.left=new Node(2);
root.right=new Node(3);
let target=5;
const mainObj = new Main();
console.log(mainObj.PathSum(root, target));