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

 function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (root == undefined) {
        return false;
    }

    if (root.val === subRoot.val) {
        if (checkSubtree(root, subRoot)) {
            return true;
        }
    }
    return isSubtree(root.left, subRoot) || 
           isSubtree(root.right, subRoot);
};

function checkSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (root == undefined && subRoot == undefined) {
        return true;
    }
    else if (root == undefined || subRoot == undefined ||
             root.val != subRoot.val) {
        return false;
    }

    if (!checkSubtree(root.left, subRoot.left)) {
        return false;
    }
    if (!checkSubtree(root.right, subRoot.right)) {
        return false;
    }
    return true;
}