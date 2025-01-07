//Binary Tree Inorder Traversal
//Given a binary tree, return the inorder traversal of its nodes' values.
class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
function inorder(root,arr){
    if(root===null){
        return;
    }
    inorder(root.left,arr);
    arr.push(root.value);
    inorder(root.right,arr);


}
const root=new Node(1);
root.left=new Node(2);
root.right=new Node(2);
root.left.left=new Node(4);
root.left.right=new Node(5);
const result = [];
inorder(root, result);
console.log("Inorder Traversal:", result);