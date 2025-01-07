//Lowest Common Ancestor of a Binary Search Tree
//Given a binary search tree, find the lowest common ancestor of two given nodes.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function lowestCommonAncestor(root, p, q) {
    if (root === null || root === p || root === q) {
      return root;
    }
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    
    if (left === null) {
      return right;
    } else if (right === null) {
      return left;
    } else {
      return root;
    }
  }
  
  function buildTree(arr, i = 0) {
    if (i >= arr.length || arr[i] === null) {
      return null;
    }
    let root = new TreeNode(arr[i]);
    root.left = buildTree(arr, 2 * i + 1);
    root.right = buildTree(arr, 2 * i + 2);
    return root;
  }
  
  function findNode(root, val) {
    if (root === null) return null;
    if (root.val === val) return root;
    return findNode(root.left, val) || findNode(root.right, val);
  }
  
  let arr = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]; 
  let root = buildTree(arr);
  
  let pVal = 5;
  let qVal = 1; 
  
  let p = findNode(root, pVal);
  let q = findNode(root, qVal);
  
  let lca = lowestCommonAncestor(root, p, q);
  console.log("Lowest Common Ancestor:", lca ? lca.val : null);
  