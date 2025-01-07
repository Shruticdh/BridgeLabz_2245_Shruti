//Diameter of a Binary Tree
//Find the diameter of a binary tree. The diameter is the longest path between any two nodes in a tree.
                        
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    
    diameterOfBinaryTree(root) {     
        let diameter = 0;     
        this.height(root, diameter);
        return diameter;
    }

    
    height(node, diameter) {
        
        if (!node) {
            return 0;
        }

        
        let lh = this.height(node.left, diameter);
        let rh = this.height(node.right, diameter);

       
        diameter = Math.max(diameter, lh + rh);

     
        return 1 + Math.max(lh, rh);
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.right = new Node(6);
root.left.right.right.right = new Node(7);

let solution = new Solution();

let diameter = solution.diameterOfBinaryTree(root);

console.log(diameter);
                    
                            
                        