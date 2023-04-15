/**
 * Definition for a binary tree node.
*/
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

 function invertTree(root: TreeNode | null): TreeNode | null {
    if (root == undefined) {
        return root;
    }

    let leftSubtree = null;
    let rightSubtree = null
    if (root.left != undefined) {
        leftSubtree = invertTree(root.left);
    }
    if (root.right != undefined) {
        rightSubtree = invertTree(root.right);
    }

    root.left = rightSubtree;
    root.right = leftSubtree;
    return root;
};