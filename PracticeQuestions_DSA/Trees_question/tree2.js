// Symmetric Tree
// Check if a given binary tree is symmetric around its center.
class Node{
    constructor(value=0,left=null,right=null){
        this.value=value;
        this.left=left;
        this.right=right;
    }
}
class Main{
    Symmetry(root){
        if(left===null && right===null){
            return true;
        }
        if(left===null || right===null){
            return false;
        }
        return root1.value && root2.value && this.Symmetry(root1.left,root2.right) && this.Symmetry(root1.right,root2.left);
    }
}
const root=new Node(1);
root.left=new Node