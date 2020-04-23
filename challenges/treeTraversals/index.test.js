import { Node, preOrder, inOrder, postOrder } from "./index";

const N = (v, l, r) => new Node(v, l, r);

describe("Tree traversals DFS (depth first search)", () => {
  test("Preorder traversal", () => {
    expect(preOrder(N(5, N(2, N(1), N(3)), N(7, null, N(9))))).toEqual([5, 2, 1, 3, 7, 9]);
    expect(preOrder(N(7, N(2), N(9)))).toEqual([7, 2, 9]);
    expect(preOrder(N(1, N(2), N(3)))).toEqual([1, 2, 3]);
    expect(preOrder(N(5, N(2, null, N(7)), N(9)))).toEqual([5, 2, 7, 9]);
  });
  test("Inorder traversal", () => {
    expect(inOrder(N(5, N(2, N(1), N(3)), N(7, null, N(9))))).toEqual([1, 2, 3, 5, 7, 9]);
    expect(inOrder(N(7, N(2), N(9)))).toEqual([2, 7, 9]);
    expect(inOrder(N(1, N(2), N(3)))).toEqual([2, 1, 3]);
    expect(inOrder(N(5, N(2, null, N(7)), N(9)))).toEqual([2, 7, 5, 9]);
  });
  test("Postorder traversal", () => {
    expect(postOrder(N(5, N(2, N(1), N(3)), N(7, null, N(9))))).toEqual([1, 3, 2, 9, 7, 5]);
    expect(postOrder(N(7, N(2), N(9)))).toEqual([2, 9, 7]);
    expect(postOrder(N(1, N(2), N(3)))).toEqual([2, 3, 1]);
    expect(postOrder(N(5, N(2, null, N(7)), N(9)))).toEqual([7, 2, 9, 5]);
  });
});
