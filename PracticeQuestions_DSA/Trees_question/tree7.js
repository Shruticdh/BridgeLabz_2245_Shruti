// Max Depth of Binary Tree
// Find the maximum depth of a binary tree.
class Node {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    maxDepth(root) {
        if (root === null) {
            return 0;
        }
        let lh = this.maxDepth(root.left);
        let rh = this.maxDepth(root.right);
        return 1 + Math.max(lh, rh);
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const solution = new Solution();
console.log(solution.maxDepth(root));
