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

function preorderTraversal(root: TreeNode | null): number[] {
    return preorderTraversalIteratively(root);
};

function preorderTraversalIteratively(root: TreeNode | null): number[] {
    let results: number[] = [];
    let stack: (TreeNode | null)[] = [];

    stack.push(root);
    while (stack.length !== 0) {
        let node = stack.pop();

        if (node == null) {
            continue;
        }

        results.push(node.val);
        stack.push(node.right);
        stack.push(node.left);
    }
    return results;
}

function preorderTraversalRecursive(root: TreeNode | null): number[] {
    let results: number[] = [];

    if (root == null) {
        return [];
    }

    results.push(root.val);
    results.push(...preorderTraversalRecursive(root.left));
    results.push(...preorderTraversalRecursive(root.right));
    return results;
}