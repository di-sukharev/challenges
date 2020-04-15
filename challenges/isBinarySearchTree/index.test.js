import isBST, { Node } from "./index";

const N = (v, l, r) => new Node(v, l, r);

describe("Is Binary Search Tree (BST)", () => {
  test("Should say if tree is BST or not", () => {
    expect(isBST(N(5, N(2, N(1), N(3)), N(7, null, N(9))))).toBeTruthy();
    expect(isBST(N(7, N(2), N(9)))).toBeTruthy();
    expect(isBST(N(1, N(2), N(3)))).toBeFalsy();
    expect(isBST(N(5, N(2, null, N(7)), N(9)))).toBeFalsy();
  });
});
