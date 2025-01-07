class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function sortedArrayToBST(nums) {
    if (nums.length === 0) {
        return null;
    }
    const mid = Math.floor(nums.length / 2);

    const root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums.slice(0, mid));   
    root.right = sortedArrayToBST(nums.slice(mid + 1));

    return root;
}

function inorderTraversal(root) {
    if (root === null) return;
    inorderTraversal(root.left);
    console.log(root.val);
    inorderTraversal(root.right);
}
const nums = [-10, -3, 0, 5, 9];
const bstRoot = sortedArrayToBST(nums);
inorderTraversal(bstRoot); 
