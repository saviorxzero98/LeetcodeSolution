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

 function binaryTreePaths(root: TreeNode | null): string[] {
    if (root == null) {
        return [];
    }
    let paths = getPaths(root, '')
    return paths;
};

function getPaths(node: TreeNode | null, path: string): string[] {
    let paths: string[] = [];
    if (node == null) {
        return paths;
    }

    let value = node.val;
    let isLeaf = (node.left == null && node.right == null);
    if (isLeaf) {
        paths.push(`${path}${value}`);
    }
    else {
        paths.push(...getPaths(node.left, `${path}${value}->`));
        paths.push(...getPaths(node.right, `${path}${value}->`));
    }
    return paths;
}
