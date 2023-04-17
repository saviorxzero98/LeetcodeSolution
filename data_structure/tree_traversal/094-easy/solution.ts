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

function inorderTraversal(root: TreeNode | null): number[] {
    return inorderTraversalIteratively(root);
};

function inorderTraversalIteratively(root: TreeNode | null): number[] {
    let results: number[] = [];
    let stack: TreeNode[] = [];

    let currentNode: TreeNode | null = root;
    while (currentNode != null || stack.length !== 0) {
        while (currentNode != null) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }

        let node = stack.pop();
        results.push(node.val);
        currentNode = node.right;
    }
    return results;
}

function inorderTraversalRecursive(root: TreeNode | null): number[] {
    if (root == undefined) {
        return [];
    }

    let results: number[] = [];

    if (root.left !== undefined) {
        results.push(...inorderTraversalRecursive(root.left));
    }

    results.push(root.val);

    if (root.right !== undefined) {
        results.push(...inorderTraversalRecursive(root.right));
    }
    return results;
};