/*
A Node has the following properties:
var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.
*/

export class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// 1.) Root node, 2.) traverse left subtree, 3.) traverse right subtree.
export function preOrder(root) {
  const result = [];

  function traversal(node) {
    const { value, left, right } = node;

    if (value) result.push(value);
    if (left) traversal(left);
    if (right) traversal(right);
  }

  traversal(root);

  return result;
}

// 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
export function inOrder(root) {
  const result = [];

  function traversal(node) {
    const { value, left, right } = node;

    if (left) traversal(left);
    if (value) result.push(value);
    if (right) traversal(right);
  }

  traversal(root);

  return result;
}

// 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
export function postOrder(root) {
  const result = [];

  function traversal(node) {
    const { value, left, right } = node;

    if (left) traversal(left);
    if (right) traversal(right);
    if (value) result.push(value);
  }

  traversal(root);

  return result;
}

// 1.) Start from the root node, 2.) visit nodes of left tree in current depth, 3.) visit nodes of right tree in current depth, 4.) step one level down
export function levelOrder(root) {
  const result = [];

  if (root) result.push(root.value);

  function traversal(node) {
    const { left, right } = node;
    if (left) result.push(left.value);
    if (right) result.push(right.value);
    if (left) traversal(left);
    if (right) traversal(right);
  }

  traversal(root);

  return result;
}
