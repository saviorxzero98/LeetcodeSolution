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

function postorderTraversal(root: TreeNode | null): number[] {
    return postorderTraversalIteratively(root);
};

function postorderTraversalIteratively(root: TreeNode | null): number[] {
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

    return results.reverse();
};

function postorderTraversalRecursive(root: TreeNode | null): number[] {
    let results: number[] = [];

    if (root == null) {
        return [];
    }

    results.push(...postorderTraversaRecursive(root.left));
    results.push(...postorderTraversaRecursive(root.right));
    results.push(root.val);
    return results
};