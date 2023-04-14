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


function maxDepth(root: TreeNode | null): number {
    if (root == undefined) {
        return 0;
    }
    return preorder(root, 1);
};

function preorder(root: TreeNode | null, level: number): number {
    if (root == undefined) {
        return level;
    }

    let currentLevel = level;
    let leftLevel = 0;
    let rightLevel = 0;

    if (root.left != undefined) {
        leftLevel = preorder(root.left, level+1);
    }
    if (root.right != undefined) {
        rightLevel = preorder(root.right, level+1);
    }

    let maxlevel = Math.max(currentLevel, leftLevel, rightLevel);
    return maxlevel;
}