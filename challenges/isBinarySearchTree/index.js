/*
 * Binary Search Tree — A binary search tree is a binary tree that is ordered.
 * This means that if you were to convert the tree to an array using an in-order traversal, the array would be in sorted order.
 * ---
 * Write a function that will validate that a given binary tree is a binary search tree.
 * The sort order is not predefined so it should work with either.
 *       5
 *      / \
 *     2   7
 *    / \   \
 *   1   3   9
 */

export class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const isOrdered = arr => {
  const isOrderedAsc = arr.every((item, i, a) => (i === a.length - 1 ? true : item < a[i + 1]));
  const isOrderedDesc = arr.every((item, i, a) => (i === a.length - 1 ? true : item > a[i + 1]));
  return isOrderedAsc || isOrderedDesc;
};

const isBST = root => {
  const res = [];

  if (!root) return false;
  if (root.value && !root.left && !root.right) return true;

  const inorderTraversal = node => {
    const { value, left, right } = node;

    if (left !== null) inorderTraversal(left);

    res.push(value);

    if (right !== null) inorderTraversal(right);
  };

  inorderTraversal(root);

  return isOrdered(res);
};

export default isBST;
