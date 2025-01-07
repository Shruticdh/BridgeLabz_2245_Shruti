// 9) Binary Search Tree Iterator
// Implement an iterator for a binary search tree that returns the next smallest number.

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BSTIterator {
    constructor(root) {
        this.stack = [];
        this._pushLeft(root);
    }

    _pushLeft(node) {
        while (node !== null) {
            this.stack.push(node);
            node = node.left;
        }
    }

    hasNext() {
        return this.stack.length > 0;
    }

    next() {
        const node = this.stack.pop();
        if (node.right !== null) {
            this._pushLeft(node.right);
        }
        return node.val;
    }
}

const root = new TreeNode(7);
root.left = new TreeNode(3);
root.right = new TreeNode(15);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(20);

const iterator = new BSTIterator(root);

console.log(iterator.next());  
console.log(iterator.next()); 
console.log(iterator.hasNext()); 
console.log(iterator.next());  
console.log(iterator.hasNext());
console.log(iterator.next()); 
console.log(iterator.hasNext());
console.log(iterator.next());  
console.log(iterator.hasNext()); 
